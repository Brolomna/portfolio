import { SceneCopy } from './SceneCopy'

type MotionProps = {
  reduced: boolean
}

export function PythonScene() {
  return (
    <div className="scene">
      <SceneCopy
        index="02"
        kicker="Python and automation"
        headline="Turning complexity into automation."
        support="Python · Workflow automation · Practical software"
      />
      <p className="overlay-note">
        Manual work enters as files and notes, then leaves as a structured result.
      </p>
    </div>
  )
}

export function AIScene() {
  return (
    <div className="scene">
      <SceneCopy
        index="03"
        kicker="Artificial intelligence"
        headline="Building with intelligence."
        support="AI integration · AI-assisted development · Intelligent workflows"
      />
      <p className="overlay-note">
        Models are tools in a pipeline. A person still reviews what comes out.
      </p>
    </div>
  )
}

export function LinuxScene() {
  const lines = [
    ['$', 'uname -sr'],
    ['', 'Linux 6.8.0-generic'],
    ['$', 'ip -br addr'],
    ['', 'lo    UP    127.0.0.1/8'],
    ['$', 'ss -tln | head -n 3'],
    ['', 'LISTEN  0.0.0.0:22'],
  ]

  return (
    <div className="scene">
      <SceneCopy
        index="04"
        kicker="Linux and systems"
        headline="Understanding what happens underneath."
        support="Linux · Systems · Troubleshooting · Networking"
      />
      <div className="terminal terminal--inset" aria-label="Linux diagnostic terminal">
        <div className="terminal__bar">
          <i /><i /><i />
        </div>
        <pre className="terminal__body">
          {lines.map((line, index) => (
            <div key={index}>
              {line[0] ? <span className="prompt">{line[0]} </span> : null}
              {line[1]}
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export function SecurityScene() {
  return (
    <div className="scene">
      <SceneCopy
        index="05"
        kicker="Cybersecurity"
        headline="Exploring the security behind technology."
        support="Networking · Web security · Security fundamentals"
      />
      <p className="overlay-note">
        A developing foundation: how systems connect, where boundaries sit, and what traffic reveals.
      </p>
    </div>
  )
}

export function WebScene({ reduced }: MotionProps) {
  return (
    <div className="scene">
      <SceneCopy
        index="06"
        kicker="Web development"
        headline="From ideas to interfaces."
        support="JavaScript · HTML · CSS · Web development"
      />
      <div className="browser browser--inset" aria-label="Code becoming a user interface">
        <div className="browser__chrome">
          <i /><i /><i />
          <div className="browser__url">localhost</div>
        </div>
        <div className="browser__stage">
          <pre className="code-pane">{`const page = {
  title: "Useful things",
  stack: ["HTML", "CSS", "JS"],
}

render(page)`}</pre>
          <div className="ui-pane">
            <div className="ui-card">
              <h3>Useful things</h3>
              <p className="muted">Structure, style, and behavior assembling into a page.</p>
              <div className="progress-rail">
                <b style={reduced ? undefined : { width: '72%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
