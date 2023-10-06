import { Sphere } from '@react-three/drei'
import React from 'react'
import { Gradient, LayerMaterial } from "lamina"
import * as THREE from "three"


export default function Background() {

    const colorA = "#591083"
    const colorB = "#c856ee"
    const start = 0.1
    const end =  -0.9

  return (
    <>
       <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial side={THREE.BackSide}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
        
      </Sphere>
    </>
  )
}
