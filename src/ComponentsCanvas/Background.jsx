import { Environment, Sphere } from '@react-three/drei'
import React from 'react'
import { Gradient, LayerMaterial } from "lamina"
import * as THREE from "three"

export default function Background() {
    // const colorA = "#591083"
    const colorA = "#310047"
    // const colorB = "#c856ee"
    const colorB = "#9614d0"
    const start = 0.2;
    const end = -0.5;
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
      <Environment resolution={512}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
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
      </Environment>
    </>
  );
};

