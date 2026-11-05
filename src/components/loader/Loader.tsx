import { site } from '../../data/site'

type LoaderProps = {
  visible: boolean
}

export function Loader({ visible }: LoaderProps) {
  return (
    <div className={`loader${visible ? '' : ' is-done'}`} aria-hidden={!visible}>
      <div className="loader__mark">{site.shortName}</div>
      <div className="loader__line" />
      <p className="loader__label">Initializing hub</p>
    </div>
  )
}
