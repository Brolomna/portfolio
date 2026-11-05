import { useEffect, useRef } from 'react'
import type { SceneId } from '../../data/scenes'
import { fieldLayouts, type FieldNode } from '../../data/graphs'

type MorphFieldProps = {
  sceneId: SceneId
  reduced: boolean
  active: boolean
}

function lerp(from: number, to: number, amount: number) {
  return from + (to - from) * amount
}

export function MorphField({ sceneId, reduced, active }: MorphFieldProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const nodesRef = useRef<FieldNode[]>(fieldLayouts.identity.nodes.map((node) => ({ ...node })))
  const sceneRef = useRef(sceneId)

  useEffect(() => {
    sceneRef.current = sceneId
    if (reduced) {
      nodesRef.current = fieldLayouts[sceneId].nodes.map((node) => ({ ...node }))
      draw()
    }
  }, [sceneId, reduced])

  function draw() {
    const svg = svgRef.current
    if (!svg) return
    const layout = fieldLayouts[sceneRef.current]
    const live = nodesRef.current
    const byId = new Map(live.map((node) => [node.id, node]))

    for (const edge of svg.querySelectorAll('[data-edge]')) {
      const from = byId.get(edge.getAttribute('data-from') ?? '')
      const to = byId.get(edge.getAttribute('data-to') ?? '')
      if (!from || !to) continue
      const midX = (from.x + to.x) / 2
      edge.setAttribute(
        'd',
        `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`,
      )
    }

    for (const group of svg.querySelectorAll<SVGGElement>('[data-node]')) {
      const node = byId.get(group.dataset.node ?? '')
      if (!node) continue
      group.setAttribute('transform', `translate(${node.x}, ${node.y})`)
      const label = group.querySelector('[data-label]')
      const sub = group.querySelector('[data-sub]')
      if (label) label.textContent = node.label
      if (sub) sub.textContent = node.sub ?? ''
    }

    const shown = new Set(layout.edges.map((edge) => `${edge.from}-${edge.to}`))
    for (const edge of svg.querySelectorAll<SVGPathElement>('[data-edge]')) {
      const key = `${edge.getAttribute('data-from')}-${edge.getAttribute('data-to')}`
      edge.style.opacity = shown.has(key) ? '1' : '0'
    }
  }

  useEffect(() => {
    let frame = 0
    const tick = () => {
      const target = fieldLayouts[sceneRef.current].nodes
      const amount = reduced ? 1 : 0.085
      nodesRef.current = nodesRef.current.map((node, index) => ({
        ...target[index],
        x: lerp(node.x, target[index].x, amount),
        y: lerp(node.y, target[index].y, amount),
      }))
      draw()
      frame = requestAnimationFrame(tick)
    }
    if (document.hidden) {
      draw()
      return
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduced, sceneId])

  const initial = fieldLayouts[sceneId]
  const allEdges = Array.from(
    new Set(
      Object.values(fieldLayouts).flatMap((layout) =>
        layout.edges.map((edge) => `${edge.from}|${edge.to}`),
      ),
    ),
  ).map((key) => {
    const [from, to] = key.split('|')
    return { from, to }
  })

  return (
    <svg
      ref={svgRef}
      className={`morph-field${active ? '' : ' is-still'}`}
      viewBox="0 0 900 560"
      aria-hidden="true"
    >
      {allEdges.map((edge) => (
        <path
          key={`${edge.from}-${edge.to}`}
          data-edge=""
          data-from={edge.from}
          data-to={edge.to}
          className="flow-graph__edge"
        />
      ))}
      {initial.nodes.map((node) => (
        <g key={node.id} data-node={node.id} transform={`translate(${node.x}, ${node.y})`}>
          <circle r="24" className="flow-graph__core" />
          <circle r="15" className="flow-graph__node" />
          <text className="flow-graph__label" textAnchor="middle" y="36" data-label="">
            {node.label}
          </text>
          <text className="flow-graph__sub" textAnchor="middle" y="52" data-sub="">
            {node.sub ?? ''}
          </text>
        </g>
      ))}
    </svg>
  )
}
