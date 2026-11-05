import { useCallback, useEffect, useRef, useState } from 'react'
import { scenes } from '../data/scenes'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function usePresentation(options?: { autoPlay?: boolean }) {
  const reduced = usePrefersReducedMotion()
  const autoPlay = options?.autoPlay ?? true
  const [index, setIndex] = useState(0)
  const [userPaused, setUserPaused] = useState(() => reduced || !autoPlay)
  const [hold, setHold] = useState(false)
  const [progress, setProgress] = useState(0)
  const elapsedRef = useRef(0)
  const indexRef = useRef(0)

  const scene = scenes[index]
  const playing = !userPaused && !hold && !reduced
  const count = scenes.length

  const goTo = useCallback((next: number) => {
    const wrapped = ((next % count) + count) % count
    indexRef.current = wrapped
    elapsedRef.current = 0
    setProgress(0)
    setIndex(wrapped)
  }, [count])

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo])
  const pause = useCallback(() => setUserPaused(true), [])
  const resume = useCallback(() => {
    if (!reduced) setUserPaused(false)
  }, [reduced])
  const toggle = useCallback(() => {
    setUserPaused((value) => !value)
  }, [])

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    if (reduced) setUserPaused(true)
  }, [reduced])

  useEffect(() => {
    const onVisibility = () => setHold(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (!playing) return
    let frame = 0
    let last = performance.now()

    const tick = (now: number) => {
      const delta = now - last
      last = now
      elapsedRef.current += delta
      const currentDuration = scenes[indexRef.current].duration
      if (elapsedRef.current >= currentDuration) {
        elapsedRef.current = 0
        const wrapped = (indexRef.current + 1) % count
        indexRef.current = wrapped
        setIndex(wrapped)
        setProgress(0)
      } else {
        setProgress(elapsedRef.current / currentDuration)
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playing, count, index, scene.duration])

  return {
    index,
    scene,
    scenes,
    progress,
    playing,
    userPaused,
    reduced,
    next,
    prev,
    goTo,
    pause,
    resume,
    toggle,
    setHold,
  }
}

export type Presentation = ReturnType<typeof usePresentation>
