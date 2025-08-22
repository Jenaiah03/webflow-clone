import React from 'react'
import  './herosection.css'
import { useState } from "react";
const HeroSection = () => {

  const [formData, setFormData] = useState({
    email: "",
    companySize: "",
    support: "",
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert("Form submitted!");
  };
  return (
    <section className='overall'>
      <div className='overall-div'>
        <div className='left'>
          
            <h1 className='left-text' >faster builds.</h1>
            <h1 className='left-text'>enterprise scale.</h1>
            <h1 className='left-text'>real results.</h1>
            
          <p>Webflow Enterprise empowers your team to visually build, manage, 
          and optimize sophisticated web experiences at scale — all backed 
          by enterprise-grade security.</p>
          <button className="demo-btn">▶ Watch demo</button>
          <p className='more-info'>↓ MORE ON WEBFLOW ENTERPRISE</p>
        </div>

        <div className="right">
        <form className="form-ctn">
          <div className='form-grid'>
      <div className='form-field'>
        <label htmlFor="" className='form-label'>BUSINESS EMAIL*</label>
        <input className='email-ctn' 
        type="email" 
        name='email'
        placeholder="Enter your email" 
        value={formData.email}
        onChange={handleChange}
        required />
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>COUNTRY SIZE*</label>
        <select 
        className='size-ctn'
        name='companySize'
        value={formData.companySize}
        onChange={handleChange}
        required
        >
          <option value="">Select....</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>HOW CAN WE SUPPORT YOU*</label>
        <select  className='support-ctn'
        name='support'
        value={formData.support}
        onChange={handleChange}
        required
        >
          <option >Select...</option>
          <option>General Inquiry</option>
          <option>Product Demo</option>
          <option>Support</option>
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>FIRSTNAME*</label>
        <input 
        className='first-ctn' 
        type="text" 
        placeholder="Enter your first name" 
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
        required />
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>LAST NAME*</label>
        <input 
        className='lastName-ctn' 
        type="text" 
        placeholder="Enter your last name" 
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
        required />
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>COMPANY*</label>
        <input 
        className='company-ctn' 
        type="text" 
        placeholder="Where do you work" 
        name='company'
        value={formData.company}
        onChange={handleChange}
        required />
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>TITLE*</label>
        <input 
        className='title-ctn' 
        type="text" 
        placeholder="What is your job title" 
        name='title'
        value={formData.title}
        onChange={handleChange}
        required />
      </div>

      <div className='form-field'>
        <label htmlFor="" className='form-label'>COUNTRY</label>
        <select className='country-ctn'
        name='country'
        value={formData.country}
        onChange={handleChange}
         required>
          <option>Select...</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </select>
      </div>

      </div>

      <div className='form-phone'>
        <label htmlFor="phoneNum" className='phone-num'>PHONE NUMBER</label>
        <input className='phone-ctn' 
        type="tel" 
        placeholder="Enter your phone number"
        name='phone'
        value={formData.phone} 
        onChange={handleChange}
        />
        
      </div>
      </form>


      <div className='bottom-class'>
        <div className='paragraph'>
          <p className='paragraph-ctn'>By submitting this form,you agree to <br />Webflow's <a href="">Terms of <br />Service</a> and <a href="">Privacy Policy</a></p>
        </div>

        <button className='talk-ctn'>Talk to us</button>
      </div>
      </div>
      </div>
      <hr />
    </section>
  )
}

export default HeroSection
