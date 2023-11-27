import React, { Suspense, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Sparkles, Stars } from '@react-three/drei'
import Background from '@/ComponentsCanvas/background/index'
import Scene from '@/ComponentsCanvas/scene/index'
import LoadingScreen from '@/ComponentsCanvas/loadingscreen'


export default function Experience() {

  const [ start, setStart ] = useState(false)

  return (
    <>
      <div className='canvas'>
        <Suspense fallback={null}>
          <Canvas>
            {start &&
              <>
                <Background />
                <Stars count={2000} />
                <Scene />
                <Sparkles
                  count={15}
                  size={4}
                  speed={0.2}
                  color="pink"
                />
              </>
            }
          </Canvas>
        </Suspense>
      </div>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  )
}