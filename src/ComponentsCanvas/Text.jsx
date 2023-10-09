import { Html, Text } from '@react-three/drei'
import React from 'react'

export default function TextComponents() {
  return (
    <>
     <group position={[0, 0.1, 0]}>
        <Text
            color="white"
            anchorX={1}
            anchorY="middle"
            fontSize={0.25}
            maxWidth={2.5}
            font={"../public/Kelsi.ttf"}
        >
            ZLEEP
        </Text>
        <Text
            color="white"
            fontSize={0.05}
            anchorX={1}
            anchorY={0.14}
        >
            ZLEEP is your number one {"\n"}
            CBD gummy-bear for the best sleep
        </Text>
     </group>

     <group  rotation-y={-0.4} position={[ 0.1, 1.5, -30]}>
        <Text
            color="white"
            anchorX={"left"}
            anchorY="center"
            fontSize={0.52}
            maxWidth={3}
        >
            sleep is LIFE{"\n"}
            and life is{"\n"}
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
        >
            According to science, a lack of sleep and rest
            can cause various forms of cancer and even an
            early death. We at ZLEEP care a lot about your
            sleep, because we understand how important it is.
        </Text>

     </group>
    </>
  )
}
