import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Stars } from '@react-three/drei'
import Background from '../../ComponentsCanvas/background/index'

import { Perf } from 'r3f-perf'
import Scene from '../../ComponentsCanvas/scene/index'


export default function Experience() {

  return (
    <>
      <div className='canvas'>
        <Canvas>
          <Background />
          <Stars count={2000} />
          <Scene />
          <Perf position="bottom-left" />
        </Canvas>
      </div>
    </>
  )
}

