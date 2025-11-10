import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function BackgroundParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // initialize the tsParticles engine ONCE
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      // we control size/stacking via className, so keep fullscreen off
      fullScreen: { enable: false },
      background: { color: { value: '#ffffffff' } },
      particles: {
        number: { value: 60 },
        color: { value: '#000000ff' },
        links: { enable: true, color: '#2f2f2fff' },
        move: { enable: true, speed: 1 },
        opacity: { value: 0.5 },
        size: { value: 2 },
      },
    }),
    []
  )

  if (!ready) return null

  return (
  <Particles
    id="tsparticles"
    className="absolute inset-0 -z-20 pointer-events-none"
    options={options}
  />
)

}
