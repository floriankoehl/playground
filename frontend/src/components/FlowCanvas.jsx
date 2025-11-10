import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Hello' } },
  { id: 'b', position: { x: 200, y: 100 }, data: { label: 'Drag me' } },
  { id: 'c', position: { x: 100, y: 200 }, data: { label: 'Another node' } },
]

const initialEdges = [] // none needed; just a draggable canvas

export default function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // optional: keep nodes within view on drag end
  const onInit = useCallback((instance) => instance.fitView({ padding: 0.2 }), [])

  return (
    <div className="h-[calc(100vh-64px)]"> {/* adjust if you have a header height */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable
        zoomOnScroll
        panOnDrag
        fitView
        onInit={onInit}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
