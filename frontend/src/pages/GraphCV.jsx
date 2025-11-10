// src/pages/GraphCV.jsx
import React, { useCallback, useMemo } from 'react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'

// ---------- Custom node that acts like a page preview ----------
function PageNode({ id, data, selected }) {
  // React Flow v11: access current transform via useReactFlow().getViewport()
  // but for simplicity we let parent pass zoom into data (set in wrapper)
  const zoom = data.zoom ?? 1

  const isDetail = zoom >= 1.25 // threshold where we reveal the "full" page content

  return (
    <div
      className={`
        rounded-2xl shadow-xl border
        bg-white/80 backdrop-blur
        ${selected ? 'ring-2 ring-blue-500' : 'border-gray-200'}
        transition-all
      `}
      style={{
        width: data.width ?? 380,
        height: data.height ?? 260,
        overflow: 'hidden',
      }}
    >
      {/* header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="font-semibold">{data.title}</div>
        <div className="text-xs opacity-80">node #{id}</div>
      </div>

      {/* content switches based on zoom level */}
      <div className="p-4 text-sm text-gray-800 h-[calc(100%-40px)] overflow-auto">
        {!isDetail && (
          <div>
            <p className="font-medium mb-1">{data.subtitle}</p>
            <p className="opacity-70 line-clamp-3">
              {data.preview}
            </p>
            <div className="mt-3 text-xs text-gray-500">
              Zoom in for details…
            </div>
          </div>
        )}

        {isDetail && (
          <div className="space-y-2">
            {data.content}
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Wrapper to provide zoom -> node data and camera helpers ----------
function GraphInner() {
  const rf = useReactFlow()

  // Keep nodes/edges in state (draggable by default)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  // Initial graph
  React.useEffect(() => {
    // Seed content for a CV-style site
    const aboutContent = (
      <>
        <p>Hi, I’m <b>Florian Köhl</b> — creative developer & social media manager.</p>
        <ul className="list-disc pl-5">
          <li>Based in Vienna, AT</li>
          <li>Enjoy React, Python/Django, UX, data & playful prototypes</li>
          <li>Sports, music, and building practical tools</li>
        </ul>
      </>
    )

    const skillsContent = (
      <>
        <p className="font-medium">Tech</p>
        <ul className="list-disc pl-5">
          <li>Frontend: React, Vite, Tailwind, MUI</li>
          <li>Backend: Django/DRF, REST APIs</li>
          <li>Data/Tools: Python, R (stats), Docker</li>
        </ul>
        <p className="font-medium mt-2">Creative/Comms</p>
        <ul className="list-disc pl-5">
          <li>Social content (Drei), branding, copy</li>
          <li>Workshops & didactics (complex → simple)</li>
        </ul>
      </>
    )

    const projectsContent = (
      <>
        <p className="font-medium">Selected:</p>
        <ul className="list-disc pl-5">
          <li>Fullstack Template (Django + React)</li>
          <li>Task Graph / Orgarhythmus (UX + scheduling)</li>
          <li>Stats learning playgrounds (R + viz)</li>
        </ul>
        <p className="text-xs text-gray-500">Zoom in nodes to read more; drag to re-organize your “site map”.</p>
      </>
    )

    const contactContent = (
      <>
        <p>Let’s connect:</p>
        <ul className="list-disc pl-5">
          <li><span className="font-mono">hello@example.com</span></li>
          <li>LinkedIn / GitHub / Portfolio</li>
        </ul>
      </>
    )

    setNodes([
      {
        id: 'about',
        type: 'page',
        position: { x: 0, y: 0 },
        data: {
          title: 'About',
          subtitle: 'Who I am',
          preview: 'Creative developer blending code, design, and clear communication.',
          content: aboutContent,
          width: 420,
          height: 280,
        },
      },
      {
        id: 'skills',
        type: 'page',
        position: { x: 500, y: -120 },
        data: {
          title: 'Skills',
          subtitle: 'What I do',
          preview: 'React, Django/DRF, Tailwind, MUI, Python/R, Docker, workshops…',
          content: skillsContent,
          width: 420,
          height: 300,
        },
      },
      {
        id: 'projects',
        type: 'page',
        position: { x: 520, y: 240 },
        data: {
          title: 'Projects',
          subtitle: 'What I’ve built',
          preview: 'Templates, scheduling graphs, stats & learning tools.',
          content: projectsContent,
          width: 440,
          height: 300,
        },
      },
      {
        id: 'contact',
        type: 'page',
        position: { x: 1040, y: 60 },
        data: {
          title: 'Contact',
          subtitle: 'Reach out',
          preview: 'Email, LinkedIn, GitHub — happy to chat.',
          content: contactContent,
          width: 360,
          height: 220,
        },
      },
    ])

    setEdges([
      { id: 'e1', source: 'about', target: 'skills', type: 'smoothstep' },
      { id: 'e2', source: 'about', target: 'projects', type: 'smoothstep' },
      { id: 'e3', source: 'skills', target: 'projects', type: 'smoothstep' },
      { id: 'e4', source: 'projects', target: 'contact', type: 'smoothstep' },
    ])

    // Start with a nice overview
    setTimeout(() => rf.fitView({ padding: 0.2, duration: 600 }), 0)
  }, [rf, setNodes, setEdges])

  // On node click: fly to that node
  const onNodeClick = useCallback((_, node) => {
    const width = node.data?.width ?? 380
    const height = node.data?.height ?? 260
    const padding = 0.2
    // Fit bounds to the node for a "zoom into page" feel
    rf.fitBounds(
      {
        x: node.position.x - padding * width,
        y: node.position.y - padding * height,
        width: width * (1 + 2 * padding),
        height: height * (1 + 2 * padding),
      },
      { duration: 500 }
    )
  }, [rf])

  // Inject current zoom into nodes so PageNode can switch preview/full
  const viewport = rf.getViewport() // { x, y, zoom }
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((n) => ({ ...n, data: { ...n.data, zoom: viewport.zoom } }))
    )
  }, [viewport.zoom, setNodes])

  const nodeTypes = useMemo(() => ({ page: PageNode }), [])

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-50 rounded-xl overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        panOnDrag
        zoomOnScroll
        fitView
      >
        <MiniMap pannable zoomable />
        <Controls showInteractive={false} />
        <Background gap={24} />
      </ReactFlow>
    </div>
  )
}

// Export with provider
export default function GraphCV() {
  return (
    <ReactFlowProvider>
      <GraphInner />
    </ReactFlowProvider>
  )
}
