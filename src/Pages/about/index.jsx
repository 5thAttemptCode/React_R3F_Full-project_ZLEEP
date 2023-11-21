import React from 'react'
import "./style.css"

import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'phosphor-react'


const HeadingText = (props) => {
  return <h1>{props.h1}</h1>
}

const AboutText = (props) => {
  return <h2>{props.h2}</h2>
}


export default function About() {
  return (
    <div className='about section'>
      <HeadingText
        h1="YOUR BODY WILL LOVE YOU 💜​"
      />

      <AboutText 
        h2="ZLEEP is a company dedicated to revolutionizing the way we sleep. We understand the importance of a good night's rest 
        for overall well-being, and that's why we have created the perfect solution - CBD gummies that promote deep, healthy, and recovering sleep."
      />

      <HeadingText
        h1="Experience the power 💪​ of CBD gummies and -"
      />

      <AboutText 
        h2="Backed by science, crafted with care. At ZLEEP, we don't compromise when it comes to quality. We work closely with leading sleep and nutrition 
        scientists to develop our products, ensuring that they are safe, effective, and completely free of chemicals or 
        artificial flavors."
      />

      <HeadingText
        h1="unlock the key to deep, restorative sleep 😴​ for a healthier body and mind."
      />
  
      <AboutText 
        h2="Deliciously vegan, gluten- and sugar-free. We believe that great sleep should be accessible to everyone. That's why our CBD gummies are vegan-friendly, 
        gluten-free, and sugar-free. "
      />

      <Link to="/checkout"><h1>GET <br /> ZLEEP<ArrowUpRight /></h1></Link>
    </div>
  )
}
