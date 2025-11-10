import React from 'react'
import BackgroundParticles from '../components/BackgroundParticles'
import ImageAvatars from '../components/ImageAvatars'
import FlowCanvas from '../components/FlowCanvas'
import DraggablePanel from '../components/DraggablePanel'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundParticles />
      <div className="relative z-10 flex h-screen items-center justify-center gap-[30px]">
        <ImageAvatars></ImageAvatars>
        <h1 className="text-[40px] font-bold">Florian Köhl</h1>
        <FlowCanvas></FlowCanvas>
        
      </div>
      
    </div>
  )
}
