import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import Background from '../ComponentsCanvas/Background'
import { Stars, PerspectiveCamera, OrbitControls, Environment, useScroll, Float } from '@react-three/drei'
import * as THREE from "three"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ZleepBottle } from '../ComponentsCanvas/ZleepBottle'
import TextComponents from './Text'
import { Group } from "three"


const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 250
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_ZLEEP = 0.02
const ZLEEP_MAX_ANGLE = 10


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


  return (
    <>
        {/* <OrbitControls /> */}
        <directionalLight position={[ 0, 3, 1]} intensity={0.1} />
        <group ref={cameraGroup}>
          <PerspectiveCamera position={[0, 0.2, 2]} fov={30} makeDefault />
          <Background />
          <group ref={zleep}>
            <Stars count={1000} />
            <Float floatIntensity={0.1} speed={1} rotationIntensity={0.5}>
              <ZleepBottle rotation={[0.1, 0,-0.07]} scale={0.115} position={[0, -0.15, 0]}  />
            </Float>
          </group>
        </group>


        {/* <Environment preset='dawn' /> */}

        {/* Text */}
        <TextComponents />

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
            opacity={0.6}
          />
        </mesh> 

        <mesh position={[-12, 6, -30]}>
          <sphereGeometry args={[4, 64, 64]} />
          <meshStandardMaterial color ="purple" />
        </mesh>
    </>
  )
}
