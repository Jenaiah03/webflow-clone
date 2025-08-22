import React from 'react'
import shield from '../../../assets/shield-check.png'
import folder from '../../../assets/folder-lock.png'
import star from '../../../assets/star.png'
import badge from '../../../assets/badge.png'
import './backedPage.css'

const BackedPage = () => {
  return (
    <div className='backedPage-container'>
      <div className='backedpage-top'>
        <h1 className='backedpage-header'>Backed by enterprise-grade security</h1>
        <p className='backedpage-para'>Launch with peace of mind thanks to Webflow’s robust security features and reliable hosting infrastructure.</p>
      </div>

    
      <div className='backedpage-down'>
        <div className="backedpage-grid">
          <div className="icon">
            <img src={folder} className='icon-img' alt=""/>
        </div>
          <h3 className='icon-text'>Single sign-on & SCIM</h3>
          <p className='icon-para'>
          Securely integrate with your identity provider and enable users to log
          in with SSO, plus automated user provisioning via SCIM and JIT.
          </p>
      </div>

      <div className="backedpage-grid">
        <div className="icon">
          <img src={star} className='icon-img' alt="" />
        </div>
        <h3 className='icon-text'>Security audit compliance</h3>
        <p className='icon-para'>
          We provide a full rundown of our risk and cybersecurity frameworks, as
          well as industry-specific controls.
        </p>
      </div>

      <div className="backedpage-grid">
        <div className="icon">
          <img src={badge} className='icon-img' alt="" />
        </div>
        <h3 className='icon-text'>SOC 2 Type II certified</h3>
        <p className='icon-para'>
          Webflow adheres to SOC 2 Type II standards for security, availability,
          and confidentiality.
        </p>
      </div>

      <div className="backedpage-grid">
        <div className="icon">
          <img src={shield} className='icon-img' alt="" />
        </div>
        <h3 className='icon-text'>Advanced DDoS protection</h3>
        <p className='icon-para' >
          Our hosting network offers built-in protection from domain denial of
          service (DDoS) attacks powered by AWS Shield.
        </p>
      </div>
      </div>
      

      <div className='security-ctn'>
        <h2 className='security-text'>Security at Webflow</h2>
        <p className='security-para'> Learn more about Webflow's security practices and share details with your security team</p>
      </div>
    </div>
  )
}

export default BackedPage
