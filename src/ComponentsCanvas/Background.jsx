import { Environment, Sphere } from '@react-three/drei'
import React, { useRef } from 'react'
import { Gradient, LayerMaterial } from "lamina"
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';

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

