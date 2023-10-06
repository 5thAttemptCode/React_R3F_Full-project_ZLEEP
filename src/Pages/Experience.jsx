import { Canvas } from '@react-three/fiber'
import React, { useMemo } from 'react'
import Background from '../ComponentsCanvas/Background'
import { Line, Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from "three"


const LINE_NB_POINTS = 1200

export default function Experience() {

  //useMemo to no reprocess it at each render
  const trail = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -10),
      new THREE.Vector3(-2, 0, -20),
      new THREE.Vector3(-3, 0, -30),
      new THREE.Vector3(0, 0, -40),
      new THREE.Vector3(5, 0, -50),
      new THREE.Vector3(7, 0, -60),
      new THREE.Vector3(5, 0, -70),
      new THREE.Vector3(0, 0, -80),
      new THREE.Vector3(0, 0, -90),
      new THREE.Vector3(0, 0, -100),
    ],
    false,
    "catmullrom", //tagname
    0.5) //tension
  }, [])

  const linePoints = useMemo(() => {
    return trail.getPoints(LINE_NB_POINTS)
  }, [trail])

  return (
    <div className='canvas'>
      <Canvas>
        {/* <OrbitControls /> */}
        <Background />
        <PerspectiveCamera position={[0, 0.2, 5]} fov={30} makeDefault />
        <Stars count={500} />
        <Line 
        position={[0, 0, 4.4]}
          points={linePoints}
          color="white"
          opacity={0.5}
          transparent
          lineWidth={12}
        />
      </Canvas>
    </div>
  )
}
