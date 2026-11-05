type SceneCopyProps = {
  index: string
  kicker: string
  headline: string
  support: string
}

export function SceneCopy({ index, kicker, headline, support }: SceneCopyProps) {
  return (
    <div className="scene__copy">
      <p className="scene-label">
        {index} · {kicker}
      </p>
      <h2>{headline}</h2>
      <p className="scene__support">{support}</p>
    </div>
  )
}
