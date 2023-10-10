import { Environment, Sphere } from '@react-three/drei'
import React, { useRef } from 'react'
import { Gradient, LayerMaterial } from "lamina"
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';

export default function Background({ backgroundColors }) {
    // const colorA = "#591083"
    // const colorB = "#c856ee"

    // const colorA = "#310047"
    // const colorB = "#9614d0"
    const start = 0.2;
    const end = -0.5;

    const gradientRef = useRef()
    const gradientEnvRef = useRef()

    useFrame(() => {
      gradientRef.current.colorA = new THREE.Color(
        backgroundColors.current.colorA
      )
      gradientRef.current.colorB = new THREE.Color(
        backgroundColors.current.colorB
      )
      gradientEnvRef.current.colorA = new THREE.Color(
        backgroundColors.current.colorA
      )
      gradientEnvRef.current.colorB = new THREE.Color(
        backgroundColors.current.colorB
      )
    })

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial side={THREE.BackSide}>
          <Gradient
            ref={gradientRef}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={512} frames={Infinity}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial side={THREE.BackSide}>
            <Gradient
              ref={gradientEnvRef}
              axes={"y"}
              start={start}
              end={end}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};

