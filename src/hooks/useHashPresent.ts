import { useEffect, useState } from 'react'

export function isPresentHash() {
  return window.location.hash.replace('#', '') === 'present'
}

export function useHashPresent() {
  const [present, setPresent] = useState(() =>
    typeof window !== 'undefined' ? isPresentHash() : false,
  )

  useEffect(() => {
    const sync = () => setPresent(isPresentHash())
    window.addEventListener('hashchange', sync)
    sync()
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return present
}

export function enterPresent() {
  window.location.hash = 'present'
}

export function exitPresent() {
  if (isPresentHash()) {
    history.pushState('', document.title, window.location.pathname + window.location.search)
    window.dispatchEvent(new Event('hashchange'))
  }
}
