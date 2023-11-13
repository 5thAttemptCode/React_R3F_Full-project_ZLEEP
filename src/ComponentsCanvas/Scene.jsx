import React, { useRef } from 'react'
import { PerspectiveCamera, Center, ScrollControls, useScroll } from '@react-three/drei'
import { Zleep } from './Zleep'
import { useFrame } from '@react-three/fiber'

const Bottle = () => {
  const bottleRef = useRef()
  const scroll = useScroll()

  useFrame(() => (
    bottleRef.current.rotation.y = scroll.offset * 15
  ))

  return(
    <mesh rotation-x={0.1} scale="0.2"  ref={bottleRef}>
      <Zleep />
    </mesh>
  )
}


export default function Scene() {

  return (
    <>
      <PerspectiveCamera position={[0, 0, 3]} fov={30} makeDefault />
      <ScrollControls pages={5}>
        <Center>
          <Bottle />
        </Center>
      </ScrollControls>
    </>
  )
}
