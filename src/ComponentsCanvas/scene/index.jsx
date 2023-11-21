import React, { useRef, useState, useEffect } from 'react'

import { Zleep } from '../gltfComponent/index'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Center, ScrollControls, useScroll, Html } from '@react-three/drei'
import ListBox from '../../ComponentsGeneral/listBox'
import FeedbackContainer from '../../ComponentsGeneral/feedbackContainer'
import TextBox from '../../ComponentsGeneral/textBox'
import TheEnd from '../../ComponentsGeneral/theEnd'
import { useNavigate } from 'react-router-dom'



const Bottle = () => {

  const bottleRef = useRef()
  const scroll = useScroll()

  useFrame(() => (
    bottleRef.current.rotation.y = scroll.offset * 15
  ))

  return (
    <mesh rotation-x={0.1} scale="0.25" ref={bottleRef}>
      <Zleep />
    </mesh>
  )
}

export default function Scene() {

  const navigate = useNavigate()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // Effect for window resize event
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to new window size
      setWindowWidth(window.innerWidth)
    }
    // Subscribe to window resize events
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window width
    handleResize()
    // Unsubscribe from events when cleaning up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that this effect runs on mount and unmount.

  const mobileView = windowWidth < 768;

  return (
    <>
      <PerspectiveCamera position={[0, 0, 3]} fov={mobileView ? 55 : 30} makeDefault />
      <ScrollControls pages={5}>
        <Center>
          <Bottle />
        </Center>
      </ScrollControls>
      <Html as='div' wrapperClass='text-box-wrapper' fullscreen>
        <TextBox
          h1="ZLEEP"
          p="Experience the power of CBD gummies and unlock the key to deep, 
             restorative sleep for a healthier body and mind."
        />

        <TextBox
          h2="I can sleep when I am dead!"
          p="According to science, a lack of sleep will cause various health 
             problems 💀. When we sleep, our body and mind recovers. We at 
             ZLEEP care a lot about your sleep💜because we understand how important it is."
        />

        <ListBox 
          title="What we put in:"
          items={["CBD", "Turmeric", "Zinc"]}
          titleTwo="Why it's good for You"
          itemsLi={["01. Sleep improvement 💤​", "02. Neuroprotective properties 🥷🏽​​", 
                    "03. Menthal health imrovement ❤️‍🩹​", "04. Natural pain relief 💪"]}
        /> 

        <TextBox 
          h2="WAKE UP FEELING REFRESHED AND REJUVENATED"
          p="With ZLEEP's CBD gummies, you can finally say goodbye to restless nights 
            and wake up feeling energized for the day ahead. Experience the transformative 
            power of deep sleep and unlock true vitality for your body and mind."
        />

        <FeedbackContainer />

        <TheEnd navigate={navigate} />
      </Html>
    </>
  )
}