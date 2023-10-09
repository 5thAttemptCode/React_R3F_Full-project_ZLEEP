import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ScrollControls } from '@react-three/drei'
import Scene from '../ComponentsCanvas/Scene'


export default function Experience() {



  return (
    <div className='canvas'>
      <Canvas>
        <ScrollControls pages={10} damping={1}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  )
}
