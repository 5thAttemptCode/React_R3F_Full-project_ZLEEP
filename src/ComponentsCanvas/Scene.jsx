import { useFrame } from '@react-three/fiber'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import Background from '../ComponentsCanvas/Background'
import { Stars, PerspectiveCamera, OrbitControls, useScroll, Float, Text} from '@react-three/drei'
import * as THREE from "three"
import { ZleepBottle } from '../ComponentsCanvas/ZleepBottle'
import TextComponents from './Text'
import { Group, Vector3 } from "three"
import { gsap } from "gsap"


const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 250
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_ZLEEP = 0.02
const ZLEEP_MAX_ANGLE = 10
const FRICTION_DISTANCE = 42


export default function Scene() {

  //LINEPOINTS FOR THE SHAPE THE MODEL FOLLOW ONSCROLL
  //useMemo to no reprocess it at each render
  const trail = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    false,
    "catmullrom", //tagname
    0.5) //tension
  }, [])

  //_____________________________________________________________

  //TEXT
  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: -1,
        position: [ 0.5, 0.3, -30],
        rotation: [0, -0.4, 0],
        index: 1,
        title: `
        sleep is LIFE
        and life is
        BEAUTIFUL
        `
      },

      {
        cameraRailDist: -1,
        position: [ -1.22, 0.5, -32],
        rotation: [0, 0.6, 0],
        index: 2,
        subtitle: ` 
        According to science, a lack of sleep and 
        rest can cause various forms of cancer and 
        even an early death. We at ZLEEP care a lot 
        about your sleep, because we understand how 
        important it is.
        `
      },

      {
        cameraRailDist: -1,
        position: [ -1, 0.3, -70],
        rotation: [0, -0.7, 0],
        index: 3,
        title: `Ingredients to BOOST your sleep`
      },

      {
        cameraRailDist: -1,
        position: [ -2.8, 0.2, -80],
        index: 4,
        title: `CBD`
      },

      {
        cameraRailDist: -1,
        position: [ -3.2, 0.5, -85],
        index: 5,
        subtitle: ` 
        Why it's good for you:
        01. Sleep improvement
        02. Neuroprotective
        03. Menthal health improvement
        04. Natural Pain relief
        `
      },
    ]
  }, [])

  //_____________________________________________________________


  //LINE WHICH THE MODEL FOLLOWS ONSCROLL
  //Create a geometry to follow the curve
  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -0.15)
    shape.lineTo(0, 0.15)

    return shape

  }, [trail]) //extrude the shape to follow the curve
  //_____________________________________________________________

  const cameraGroup = useRef()
  const scroll = useScroll()

  useFrame((_state, delta) => {

    const scrollOffset = Math.max(0, scroll.offset)

    tl.current.seek(scrollOffset * tl.current.duration());

  
    const trailPoint = trail.getPoint(scrollOffset)

    //Follow the trail points
    cameraGroup.current.position.lerp(trailPoint, delta * 24)

    //Make the group look ahead on the trail
    const lookAtPoint = trail.getPoint(Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1))
    
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    )

    const targetLookAt = new THREE.Vector3()
    .subVectors(trailPoint, lookAtPoint)
    .normalize()

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    //ZleepBottle rotation
    const tangent = trail.getTangent(scrollOffset + CURVE_AHEAD_ZLEEP)
    
    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(trailPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    )

    let angle = Math.atan2(-tangent.z, tangent.x)
    angle = -Math.PI / 2 + angle

    let angleDegrees = (angle * 180) / Math.PI
    angleDegrees *= 2.4 //higher number = stronger angle

    //Limit Zleepbottle angle
    if (angleDegrees < 0){
      angleDegrees = Math.max(angleDegrees, -ZLEEP_MAX_ANGLE)
    }
    if (angleDegrees > 0){
      angleDegrees = Math.min(angleDegrees, ZLEEP_MAX_ANGLE)
    }

    //Set back angle
    angle = (angleDegrees * Math.PI / 180)
    
    const targetZleepQuarternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        zleep.current.rotation.x,
        zleep.current.rotation.y,
        angle
      )
    )
    zleep.current.quaternion.slerp(targetZleepQuarternion, delta * 24)
  })

  const zleep = useRef()


  const tl = useRef()
  const backgroundColors = useRef({
    colorA: "#310047",
    colorB: "#9614d0"
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()

    tl.current.to(backgroundColors.current, {
      duration: 0.1,
      colorA: "blue",
      colorB: "yellow"
    })
    tl.current.to(backgroundColors.current, {
      duration: 0.1,
      colorA: "red",
      colorB: "green"
    })
    tl.current.to(backgroundColors.current, {
      duration: 0.1,
      colorA: "black",
      colorB: "grey"
    })

    tl.current.pause()
  }, [])

  return (
    <>
        {/* <OrbitControls /> */}
        <directionalLight position={[ 0, 3, 1]} intensity={0.1} />
        <group ref={cameraGroup}>
          <PerspectiveCamera position={[0, 0.2, 2]} fov={30} makeDefault />
          <Background backgroundColors={backgroundColors} />
          <group ref={zleep}>
            <Stars count={1000} />
            <Float floatIntensity={0.1} speed={1} rotationIntensity={0.5}>
              <ZleepBottle rotation={[0.1, 0,-0.07]} scale={0.115} position={[0, -0.15, 0]}  />
            </Float>
          </group>
        </group>

        <directionalLight position={[ 2.5, 0.5, 3]} intensity={1} />
        <directionalLight position={[ -2.5, 0.5, 3]} intensity={1.5} />
        
        {/* Text */}
        {textSections.map((textSection, index) => (
          <TextComponents {...textSection} key={index} />
        ))}

        <Text 
          position={[-0.09, 0.1, 0]}
          color="white"
          anchorX={1}
          anchorY="middle"
          fontSize={0.27} 
          maxWidth={2.5}
          font={"../public/Kelsi.ttf"}
          material-toneMapped={false}
        >
          ZLEEP
        </Text>

        {/* LINE */}
        <mesh position={[0, -0.2, 2]}>
          <extrudeGeometry 
            args={[ shape, {
                steps: LINE_NB_POINTS,
                bevelEnabeld: false,
                extrudePath: trail,
            }]}
          />
          <meshStandardMaterial 
            color="white" 
            transparent 
            opacity={0.7}
            envMapIntensity={10}
          />
        </mesh> 

        <mesh position={[-12, 6, -30]}>
          <sphereGeometry args={[4, 64, 64]} />
          <meshStandardMaterial color ="purple" />
        </mesh>

        <mesh position={[30, -3, -300]}>
          <sphereGeometry args={[4, 64, 64]} />
          <meshStandardMaterial color ="purple" />
        </mesh>
    </>
  )
}
