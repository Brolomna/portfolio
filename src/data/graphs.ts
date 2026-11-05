import type { SceneId } from './scenes'

export type FieldNode = {
  id: string
  x: number
  y: number
  label: string
  sub?: string
}

export type FieldEdge = {
  from: string
  to: string
}

export type FieldLayout = {
  nodes: FieldNode[]
  edges: FieldEdge[]
}

const ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

function layout(
  points: Array<[number, number, string, string?]>,
  links: Array<[number, number]>,
): FieldLayout {
  return {
    nodes: points.map((point, index) => ({
      id: ids[index],
      x: point[0],
      y: point[1],
      label: point[2],
      sub: point[3],
    })),
    edges: links.map(([from, to]) => ({ from: ids[from], to: ids[to] })),
  }
}

export const fieldLayouts: Record<SceneId, FieldLayout> = {
  identity: layout(
    [
      [620, 120, 'Python'],
      [780, 160, 'Build'],
      [840, 300, 'Linux'],
      [760, 430, 'Teach'],
      [600, 460, 'Web'],
      [520, 320, 'AI'],
      [540, 180, 'Automate'],
      [700, 280, 'Justin'],
    ],
    [
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
    ],
  ),
  python: layout(
    [
      [80, 280, 'Input', 'Notes and files'],
      [260, 160, 'Parse', 'Python'],
      [260, 400, 'Rules', 'Repeatable logic'],
      [460, 280, 'Run', 'Hands-off'],
      [660, 180, 'Check'],
      [660, 380, 'Log'],
      [840, 280, 'Output', 'Useful result'],
      [460, 120, 'Queue'],
    ],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [7, 3],
      [3, 4],
      [3, 5],
      [4, 6],
      [5, 6],
    ],
  ),
  ai: layout(
    [
      [80, 280, 'Source', 'Unstructured text'],
      [300, 140, 'Context'],
      [300, 280, 'Model', 'Optional API'],
      [300, 420, 'Checks'],
      [560, 160, 'Summary'],
      [560, 280, 'Actions'],
      [560, 420, 'Classify'],
      [820, 280, 'Review', 'Human in the loop'],
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 7],
      [5, 7],
      [6, 7],
    ],
  ),
  linux: layout(
    [
      [520, 80, 'User'],
      [520, 160, 'Shell'],
      [360, 250, 'Process'],
      [680, 250, 'Network'],
      [360, 360, 'Files'],
      [680, 360, 'Services'],
      [520, 460, 'Kernel'],
      [200, 160, 'Logs'],
    ],
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 6],
      [2, 6],
      [3, 6],
    ],
  ),
  security: layout(
    [
      [80, 280, 'Internet'],
      [280, 280, 'Edge', 'Boundary'],
      [500, 140, 'Web'],
      [500, 280, 'App'],
      [500, 420, 'DNS'],
      [740, 180, 'Inspect', 'Headers, TLS'],
      [740, 380, 'Map', 'Who talks to whom'],
      [280, 140, 'Policy'],
    ],
    [
      [0, 1],
      [7, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 5],
      [4, 6],
    ],
  ),
  web: layout(
    [
      [140, 160, 'HTML'],
      [140, 300, 'CSS'],
      [140, 440, 'JavaScript'],
      [400, 280, 'Compose'],
      [640, 160, 'Layout'],
      [640, 400, 'Behavior'],
      [840, 280, 'Interface'],
      [400, 120, 'Idea'],
    ],
    [
      [7, 3],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 4],
      [3, 5],
      [4, 6],
      [5, 6],
    ],
  ),
  projects: layout(
    [
      [160, 140, 'Moonfall', 'Roles and phases'],
      [420, 140, 'Players', 'Shared state'],
      [160, 280, 'AI Workflow', 'Notes in'],
      [420, 280, 'Actions', 'Structured out'],
      [160, 420, 'Extractor', 'Raw input'],
      [420, 420, 'Rows', 'Parsed export'],
      [720, 280, 'Work'],
      [720, 140, 'Showcase'],
    ],
    [
      [0, 1],
      [2, 3],
      [4, 5],
      [1, 6],
      [3, 6],
      [5, 6],
      [6, 7],
    ],
  ),
  teaching: layout(
    [
      [120, 280, 'Concept'],
      [340, 160, 'Explain'],
      [340, 400, 'Question'],
      [560, 160, 'Computing', '2017–2019'],
      [560, 400, 'English', '2021–2023'],
      [780, 220, 'Clarity'],
      [780, 360, 'Practice'],
      [120, 140, 'Learner'],
    ],
    [
      [0, 1],
      [0, 2],
      [7, 1],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 6],
    ],
  ),
  contact: layout(
    [
      [300, 160, 'Build'],
      [520, 120, 'Learn'],
      [740, 180, 'Share'],
      [820, 340, 'Collaborate'],
      [620, 440, 'Open'],
      [380, 440, 'Curious'],
      [220, 300, 'Useful'],
      [520, 280, 'Next'],
    ],
    [
      [0, 7],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
    ],
  ),
}
