import { Html, Text } from '@react-three/drei'
import React from 'react'

export default function TextComponents({title, subtitle, ...props}) {
    // position={[-0.09, 0.1, 0]}
  return (
    <>
     <group {...props}>
        {!!title && (
            <Text
                color="white"
                anchorX={1}
                anchorY="middle"
                fontSize={0.27}
                maxWidth={2.5}
                font={"../public/Kelsi.ttf"}
                material-toneMapped={false}
            >
                {title}
            </Text>
        )}
        {!!subtitle && (
            <Text
                color="white"
                fontSize={0.05}
                anchorX={1}
                anchorY={0.14}
                maxWidth={2}
                material-toneMapped={false}
            >
                {subtitle}
            </Text>
        )}
     </group>

     {/* <group  rotation-y={-0.4} position={[ 0.1, 1.5, -30]}>
        <Text
            color="white"
            anchorX={"left"}
            anchorY="center"
            fontSize={0.52}
            maxWidth={3}
            material-toneMapped={tonemapped}
            font={"../public/Kelsi.ttf"}
        >
            sleep is LIFE
            and life is
            BEAUTIFUL
        </Text>
     </group>


     <group rotation-y={0.6} position={[ -5, 1, -45]}>
        <Text
            color="white"
            anchorX={"left"}
            anchorY="center"
            fontSize={0.2}
            maxWidth={3}
            material-toneMapped={false}
        >
            According to science, a lack of sleep and rest
            can cause various forms of cancer and even an
            early death. We at ZLEEP care a lot about your
            sleep, because we understand how important it is.
        </Text>

     </group> */}
    </>
  )
}
