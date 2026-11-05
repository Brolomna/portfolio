import { useEffect, useRef } from 'react'

type AmbientCanvasProps = {
  active: boolean
  reduced: boolean
}

type Particle = {
  x: number
  y: number
  r: number
  s: number
  a: number
}

export function AmbientCanvas({ active, reduced }: AmbientCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || reduced) return

    const context = canvas.getContext('2d')
    if (!context) return

    let frame = 0
    let running = true
    const particles: Particle[] = []

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = width < 700 ? 42 : 90
      particles.length = 0
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.6 + 0.3,
          s: Math.random() * 0.12 + 0.02,
          a: Math.random() * 0.5 + 0.15,
        })
      }
    }

    const draw = () => {
      if (!running) return
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      if (active && !document.hidden) {
        for (const particle of particles) {
          particle.y -= particle.s
          if (particle.y < -4) particle.y = height + 4
          context.beginPath()
          context.fillStyle = `rgba(197, 181, 253, ${particle.a})`
          context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
          context.fill()
        }
      } else {
        for (const particle of particles) {
          context.beginPath()
          context.fillStyle = `rgba(197, 181, 253, ${particle.a * 0.55})`
          context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
          context.fill()
        }
      }
      frame = requestAnimationFrame(draw)
    }

    resize()
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [active, reduced])

  return <canvas ref={ref} className="ambient-canvas" aria-hidden="true" />
}
