import { useEffect, useRef } from 'react'
import type { SceneId } from '../../data/scenes'

type AmbientCanvasProps = {
  active: boolean
  reduced: boolean
  sceneId: SceneId
}

type Particle = {
  x: number
  y: number
  r: number
  s: number
  a: number
}

const tints: Record<SceneId, string> = {
  identity: '196,181,253',
  python: '251,191,36',
  ai: '129,140,248',
  linux: '74,222,128',
  security: '125,211,252',
  web: '147,197,253',
  projects: '196,181,253',
  teaching: '253,186,116',
  contact: '167,139,250',
}

export function AmbientCanvas({ active, reduced, sceneId }: AmbientCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef(sceneId)
  sceneRef.current = sceneId

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || reduced) return

    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return

    let frame = 0
    let running = true
    const particles: Particle[] = []

    const paint = (moving: boolean) => {
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      const tint = tints[sceneRef.current]
      for (const particle of particles) {
        if (moving) {
          particle.y -= particle.s
          if (particle.y < -4) particle.y = height + 4
        }
        context.beginPath()
        context.fillStyle = `rgba(${tint}, ${moving ? particle.a * 0.35 : particle.a * 0.16})`
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
        context.fill()
      }
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width * ratio))
      canvas.height = Math.max(1, Math.floor(height * ratio))
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = width < 700 ? 12 : 22
      particles.length = 0
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.25,
          s: Math.random() * 0.08 + 0.015,
          a: Math.random() * 0.28 + 0.08,
        })
      }
      paint(false)
    }

    const tick = () => {
      if (!running) return
      if (!active || document.hidden) {
        paint(false)
        return
      }
      paint(true)
      frame = requestAnimationFrame(tick)
    }

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        paint(false)
      } else if (active && running) {
        frame = requestAnimationFrame(tick)
      }
    }

    resize()
    if (active) frame = requestAnimationFrame(tick)
    else paint(false)

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [active, reduced, sceneId])

  return <canvas ref={ref} className="ambient-canvas" aria-hidden="true" />
}
