import type { MouseEvent } from 'react'

export function isPendingHref(href: string) {
  return !href || href === '#' || href === 'mailto:'
}

export function linkProps(href: string) {
  const pending = isPendingHref(href)
  const external = href.startsWith('http')
  const mail = href.startsWith('mailto:') && href.length > 7

  return {
    href: pending ? '#' : href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer noopener' : undefined,
    'aria-disabled': pending || undefined,
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      if (pending && !mail) event.preventDefault()
    },
  }
}
