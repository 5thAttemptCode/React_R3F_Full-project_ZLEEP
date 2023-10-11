import React from 'react'
import "./css/about.css"


export default function About() {
  return (
    <div className='about section'>
      <h1><span>Welcome to ZLEEP - The Ultimate Sleep Solution!</span> Experience the power of CBD gummies and unlock the key to deep, restorative sleep for a healthier body and mind.</h1>
      
      <div className="box one">
        <h2>This is us</h2>
        <h4>ZLEEP is a company dedicated to revolutionizing the way we sleep. We understand the importance of a good night's rest 
          for overall well-being, and that's why we have created the perfect solution - CBD gummies that promote deep, healthy, and recovering sleep.
        </h4>
        <img className='bottle1' src="../../public/Bottle1.png" alt="" />
      </div>

      <div className="box two">
        <h2>Backed by science, crafted with care</h2>
        <h4>At ZLEEP, we don't compromise when it comes to quality. We work closely with leading sleep and nutrition 
          scientists to develop our products, ensuring that they are safe, effective, and completely free of chemicals or 
          artificial flavors. You can trust that our CBD gummies deliver the best results for your sleep.
        </h4>
      </div>

      <div className="box three">
        <h2>Deliciously vegan, gluten- and sugar-free</h2>
        <h4>We believe that great sleep should be accessible to everyone. That's why our CBD gummies are vegan-friendly, 
          gluten-free, and sugar-free. We have carefully selected the finest ingredients to create a guilt-free indulgence 
          that not only aids in your sleep but also aligns with your dietary preferences and restrictions.
        </h4>
        <img className='bottle3' src="../../public/Bottle3.png" alt="" />
      </div>
    

      <div className="box four">
        <h2>Wake up feeling refreshed and rejuvenated</h2>
        <h4>With ZLEEP's CBD gummies, you can finally say goodbye to restless nights and wake up feeling energized for the day ahead. 
          Experience the transformative power of deep sleep and unlock true vitality for your body and mind.
        </h4>
        <img className='bottle2' src="../../public/Bottle2.png" alt="" />
      </div>
    </div>
  )
}
