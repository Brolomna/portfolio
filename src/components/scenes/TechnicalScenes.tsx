import { SceneCopy } from './SceneCopy'
import { AIProcessingVisual } from '../visuals/AIProcessingVisual'
import { LinuxSystemVisual } from '../visuals/LinuxSystemVisual'
import { PythonWorkflowVisual } from '../visuals/PythonWorkflowVisual'
import { SecurityNetworkVisual } from '../visuals/SecurityNetworkVisual'
import { WebConstructionVisual } from '../visuals/WebConstructionVisual'

type MotionProps = {
  reduced: boolean
}

export function PythonScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--stack">
      <SceneCopy
        index="02"
        kicker="Python and automation"
        headline="Turning complexity into automation."
        support="Python · Workflow automation · Practical software"
      />
      <PythonWorkflowVisual reduced={reduced} />
    </div>
  )
}

export function AIScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--stack">
      <SceneCopy
        index="03"
        kicker="Artificial intelligence"
        headline="Building with intelligence."
        support="AI integration · AI-assisted development · Intelligent workflows"
      />
      <AIProcessingVisual reduced={reduced} />
    </div>
  )
}

export function LinuxScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--stack">
      <SceneCopy
        index="04"
        kicker="Linux and systems"
        headline="Understanding what happens underneath."
        support="Linux · Systems · Troubleshooting · Networking"
      />
      <LinuxSystemVisual reduced={reduced} />
    </div>
  )
}

export function SecurityScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--stack">
      <SceneCopy
        index="05"
        kicker="Cybersecurity"
        headline="Exploring the security behind technology."
        support="Networking · Web security · Security fundamentals"
      />
      <SecurityNetworkVisual reduced={reduced} />
    </div>
  )
}

export function WebScene({ reduced }: MotionProps) {
  return (
    <div className="scene scene--exhibit">
      <SceneCopy
        index="06"
        kicker="Web development"
        headline="From ideas to interfaces."
        support="JavaScript · HTML · CSS · Web development"
      />
      <WebConstructionVisual reduced={reduced} />
    </div>
  )
}
