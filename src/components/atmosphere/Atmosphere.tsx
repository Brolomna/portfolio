import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
  da: number
}

export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = document.documentElement
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      root.style.setProperty('--mx', `${event.clientX}px`)
      root.style.setProperty('--my', `${event.clientY}px`)
      const nx = event.clientX / window.innerWidth - 0.5
      const ny = event.clientY / window.innerHeight - 0.5
      root.style.setProperty('--px', `${nx * 18}px`)
      root.style.setProperty('--py', `${ny * 12}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    const surface: HTMLCanvasElement = canvas
    const gfx: CanvasRenderingContext2D = ctx

    let frame = 0
    let running = true
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const count = mobile ? 18 : 42
    const particles: Particle[] = []

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6)
      surface.width = Math.floor(window.innerWidth * dpr)
      surface.height = Math.floor(window.innerHeight * dpr)
      surface.style.width = `${window.innerWidth}px`
      surface.style.height = `${window.innerHeight}px`
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      particles.length = 0
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 1.8 + 0.4,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          a: Math.random() * 0.6 + 0.1,
          da: (Math.random() - 0.5) * 0.008,
        })
      }
    }

    function tick() {
      if (!running) return
      gfx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.a += p.da
        if (p.a < 0.05 || p.a > 0.75) p.da *= -1
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        if (p.y > window.innerHeight + 10) p.y = -10
        gfx.beginPath()
        gfx.fillStyle = `rgba(213, 139, 255, ${p.a})`
        gfx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        gfx.fill()
      }
      frame = window.requestAnimationFrame(tick)
    }

    resize()
    seed()
    frame = window.requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      running = false
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__sky" />
      <div className="atmosphere__orb atmosphere__orb--a" />
      <div className="atmosphere__orb atmosphere__orb--b" />
      <div className="atmosphere__orb atmosphere__orb--c" />
      <div className="atmosphere__ring atmosphere__ring--a" />
      <div className="atmosphere__ring atmosphere__ring--b" />
      <div className="atmosphere__clouds" />
      <canvas ref={canvasRef} className="atmosphere__particles" />
      <svg className="atmosphere__horizon" viewBox="0 0 1440 240" preserveAspectRatio="none">
        <path
          d="M0 180C180 120 280 210 460 150C640 90 720 190 900 140C1080 90 1200 170 1440 110V240H0Z"
          fill="currentColor"
        />
        <path
          d="M0 200C220 160 340 220 520 180C760 130 880 210 1080 170C1240 140 1340 190 1440 160V240H0Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
      <div className="atmosphere__vignette" />
    </div>
  )
}
