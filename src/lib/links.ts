export function isConfigured(href?: string) {
  if (!href) return false
  const value = href.trim()
  if (!value || value === '#') return false
  if (value === 'mailto:' || value === 'mailto') return false
  return true
}

export function externalLink(href: string) {
  return {
    href,
    target: '_blank' as const,
    rel: 'noreferrer noopener',
  }
}

export function configured<T extends { href?: string }>(items: readonly T[]) {
  return items.filter((item) => isConfigured(item.href))
}
