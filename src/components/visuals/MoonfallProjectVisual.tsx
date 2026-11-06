import type { VisualProps } from './primitives'

const seats = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6']

export function MoonfallProjectVisual({ reduced }: VisualProps) {
  return (
    <div className={`proj proj-moon${reduced ? ' is-static' : ''}`} aria-label="Local multiplayer werewolf session">
      <div className="moon-table">
        <div className="moon-phase">
          <b>Night</b>
          <span>Day</span>
        </div>
        {seats.map((seat) => (
          <div className={`seat seat--${seat.toLowerCase()}`} key={seat}>
            <i />
            <em>{seat}</em>
            <small>role</small>
          </div>
        ))}
      </div>
      <div className="vote-rail">
        <span>vote</span>
        <b />
      </div>
    </div>
  )
}
