import React from 'react'
import './webflowSection.css'
import flow from '../../../assets/flow1.jpg'
const WeblowflowSection = () => {
  return (
    <section className='flow-section'>
        <div className='flow-area'>
            <div className="flow-left">
                <button className="tag">WEBFLOW PLATFORM</button>
                <h1 className='flow-header'>A powerful platform for <br /> marketing, design, and dev
                </h1>
        <p className='flow-para'>
          Webflow is more than just a website builder. It gives every team the
          tools they need — including visual site building, content management,
          analytics, and optimization.
        </p>
        <a href="/" className="explore">
          Explore the Webflow platform →
        </a>
      </div>
      <div className="hero-right">
        <img src={flow} alt="Hero Illustration" />
      </div>
      </div>
    </section>
  )
}

export default WeblowflowSection
