import type { BrandIconName } from '../../data/site'

type BrandIconProps = {
  name: BrandIconName
}

export function BrandIcon({ name }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className="brand-icon" aria-hidden="true">
      {name === 'youtube' && (
        <>
          <rect x="3" y="6.2" width="18" height="11.6" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10.4 10v4.2L14.8 12.1z" fill="currentColor" />
        </>
      )}
      {name === 'github' && (
        <path
          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6A5.1 5.1 0 0 0 18 4.8 4.8 4.8 0 0 0 17.9 1S16.7.7 13.8 2.7a15 15 0 0 0-6 0C4.9.7 3.7 1 3.7 1A4.8 4.8 0 0 0 3.6 4.8 5.1 5.1 0 0 0 2.2 8.9c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {name === 'discord' && (
        <path
          d="M7.4 7.2c1.4-.6 2.8-1 4.6-1s3.2.4 4.6 1c1.1 2.6 1.4 5.1 1.3 7.6-1.4.6-2.8 1.1-4.2 1.3l-.8-1.6c.6-.2 1.1-.4 1.6-.6M7.4 7.2C6.3 9.8 6 12.3 6.1 14.8c1.4.6 2.8 1.1 4.2 1.3l.8-1.6c-.6-.2-1.1-.4-1.6-.6m2.2-3.4c-.6 0-1 .5-1 1.2s.4 1.2 1 1.2 1-.5 1-1.2-.4-1.2-1-1.2m4.2 0c-.6 0-1 .5-1 1.2s.4 1.2 1 1.2 1-.5 1-1.2-.4-1.2-1-1.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
      {name === 'linkedin' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 11v5M8 8h.01M12 16v-3.2a1.8 1.8 0 1 1 3.6 0V16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}
      {name === 'instagram' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.6" cy="7.4" r="0.85" fill="currentColor" />
        </>
      )}
      {name === 'telegram' && (
        <path
          d="M20.2 5.4 3.9 11.6c-.8.3-.8 1.5.1 1.8l4.1 1.3 1.6 5.1c.2.8 1.3 1 1.8.4l2.4-2.6 4.4 3.2c.7.5 1.7.1 1.9-.8l2.5-12.4c.2-1-.8-1.8-1.7-1.4zM9.4 14.1l8.4-5.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {name === 'mail' && (
        <path
          d="M4.4 7.2h15.2v9.6H4.4zM4.7 7.6l7.3 5.3 7.3-5.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      )}
      {name === 'x' && (
        <path
          d="M6 6.6 14.4 17.4H18L9.6 6.6H6Zm.3 10.8L18 6.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      )}
      {name === 'globe' && (
        <>
          <circle cx="12" cy="12" r="7.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 12h14M12 4.9c2 2.2 3 4.6 3 7.1s-1 4.9-3 7.1c-2-2.2-3-4.6-3-7.1s1-4.9 3-7.1z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </>
      )}
      {name === 'file' && (
        <path
          d="M7 4.8h7.2L18 8.6V19.2H7zM14.2 4.8V8.6H18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      )}
      {name === 'book' && (
        <path
          d="M6 5.4h5.4A2.6 2.6 0 0 1 14 8v11H8.2A2.2 2.2 0 0 0 6 16.2zm6.6 0H18A2.6 2.6 0 0 1 20.6 8v11H14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )}
      {name === 'game' && (
        <path
          d="M5.4 10.2h13.2a2.8 2.8 0 0 1 2.6 3.8l-1 2.4a2.4 2.4 0 0 1-2.3 1.5H6.1a2.4 2.4 0 0 1-2.3-1.5l-1-2.4a2.8 2.8 0 0 1 2.6-3.8zM8.4 13.2v2.4M7.2 14.4h2.4M16 13.1h.02M17.6 14.8h.02"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
      {name === 'teach' && (
        <path
          d="M4.6 16.6 12 12.2l7.4 4.4L12 21zM4.6 11.2 12 6.8l7.4 4.4L12 15.6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )}
      {name === 'language' && (
        <>
          <circle cx="12" cy="12" r="7.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.2 10.2h13.6M5.2 13.8h13.6M12 4.9c1.8 2.4 2.7 4.7 2.7 7.1s-.9 4.7-2.7 7.1c-1.8-2.4-2.7-4.7-2.7-7.1s.9-4.7 2.7-7.1z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  )
}
