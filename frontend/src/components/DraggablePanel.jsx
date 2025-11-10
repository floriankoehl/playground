import React, { useRef } from 'react'
import Draggable from 'react-draggable'

export default function DraggablePanel() {
  const nodeRef = useRef(null)

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      defaultPosition={{ x: 80, y: 80 }}
      bounds="body"                           // or remove to allow full free drag
      cancel="input,textarea,button,select,.no-drag"
      className="h-[600px]"
    >
      <div
        ref={nodeRef}
        className="relative select-none pointer-events-auto z-[99999]
                   bg-white/15 h-[300px] w-[300px] backdrop-blur-md border border-black/25
                   rounded-xl shadow-lg"
        style={{ width: 300 }}
      >
        <div className="drag-handle cursor-move px-3 py-2 font-medium text-black/90 bg-black/90 text-white rounded-t-xl">
          Drag me
        </div>
        <div className="p-3 text-black">
          <p className="text-sm opacity-90">Draggable panel over everything ✨</p>
        </div>
      </div>
    </Draggable>
  )
}
