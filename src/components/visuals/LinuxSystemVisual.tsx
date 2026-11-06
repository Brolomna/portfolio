import type { VisualProps } from './primitives'
import { FrameDots } from './primitives'

const layers = [
  ['User', 'at the machine'],
  ['Shell', 'commands and control'],
  ['Processes · Services', 'what is running'],
  ['Files · Network', 'system resources'],
  ['Kernel', 'the layer underneath'],
]

export function LinuxSystemVisual({ reduced }: VisualProps) {
  return (
    <div className={`viz viz-linux${reduced ? ' is-static' : ''}`} aria-label="Linux system architecture">
      <div className="sys-stack">
        {layers.map(([title, hint], index) => (
          <div className={`sys-layer sys-layer--${index}`} key={title}>
            <strong>{title}</strong>
            <span>{hint}</span>
          </div>
        ))}
        <div className="sys-meters">
          <label>
            CPU
            <b />
          </label>
          <label>
            memory
            <b />
          </label>
          <label>
            net
            <b />
          </label>
        </div>
      </div>
      <div className="term-frame term-frame--linux">
        <FrameDots />
        <p className="term-title">shell</p>
        <pre>
          <span className="typed typed-1">$ whoami{'\n'}</span>
          <span className="out out-1">justin{'\n'}</span>
          <span className="typed typed-2">$ uname -a{'\n'}</span>
          <span className="out out-2">Linux … x86_64{'\n'}</span>
          <span className="typed typed-3">$ ps aux{'\n'}</span>
          <span className="out out-3">bash  systemd  sshd{'\n'}</span>
          <span className="typed typed-4">$ df -h{'\n'}</span>
          <span className="out out-4">/      32G  41%{'\n'}</span>
          <span className="typed typed-5">$ systemctl status{'\n'}</span>
          <span className="out out-5">running</span>
        </pre>
      </div>
    </div>
  )
}
