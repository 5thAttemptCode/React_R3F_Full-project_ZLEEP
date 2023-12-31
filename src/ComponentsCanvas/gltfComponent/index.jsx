import React from 'react'

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'


export function Zleep(props) {
  const { nodes, materials } = useGLTF('/zleep.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Material} position={[0, 1.882, 0]} rotation={[-Math.PI, 1.135, -Math.PI]} scale={1.264}>
        <MeshTransmissionMaterial color="purple" backside backsideThickness={1} thickness={1} />
      </mesh>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Material} position={[0, 4.709, 0]} rotation={[-Math.PI, 1.135, -Math.PI]} scale={[1, 0.222, 1]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.002']} position={[0, 1.983, 0]} rotation={[-Math.PI, 1.135, -Math.PI]} scale={[1.275, 1.428, 1.275]} />
    </group>
  )
}

useGLTF.preload('/zleep.gltf')
