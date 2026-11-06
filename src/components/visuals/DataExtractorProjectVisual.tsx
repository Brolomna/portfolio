import type { VisualProps } from './primitives'

export function DataExtractorProjectVisual({ reduced }: VisualProps) {
  return (
    <div className={`proj proj-extract${reduced ? ' is-static' : ''}`} aria-label="Raw input becoming a structured table">
      <div className="raw-block">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="extract-mid">parse</div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>alpha</td>
          </tr>
          <tr>
            <td>02</td>
            <td>bravo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
