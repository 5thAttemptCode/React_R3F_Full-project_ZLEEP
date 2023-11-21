import React from 'react'

import * as THREE from "three"
import { Environment, Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from "lamina"


export default function Background() {

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial side={THREE.BackSide}>
          <Gradient
            axes='y'
            colorA="#3A0A4E"
            colorB="#C5A4D2"
            start={0}
          />
        </LayerMaterial>
      </Sphere>
      <Environment preset="dawn" />
    </>
  );
};

