import React from 'react'
import './scalepage.css'
import database from '../../../assets/database (1).png'
import activity from '../../../assets/activity (1).png'
import zap from '../../../assets/zap (1).png'
import globe from '../../../assets/globe (1).png'
const ScalePage = () => {
  return (
   <section className='scale'>
        <div className='scale-top'>
            <h1 className='scale-title'>Scale your sites <br/> with confidence</h1>
            <p className='scale-subtitle'>Our platform gives you everything you need to build and maintain fast, reliable websites that grow to meet your needs.</p>
        </div>

        <div className='scale-grid'>
            <div className='feature-card'>
              <div className='scale-image'>
                <img src={database} alt="" className='scale-img' />
              </div>
              <h3 className='feature-text'>A visual-first, composable CMS</h3>
              <p className='feature-para'> Choose how you want to add, edit, and update content at scale: visually in our platform or programmatically through our headless APIs.
              </p>
            </div>


            <div className='feature-card'>
              <div className='scale-image'>
                <img src={activity} alt="" className='scale-img' />
              </div>
              <h3 className='feature-text'>Reliable traffic management</h3>
              <p className='feature-para'>Webflow’s enterprise-grade stack and global hosting network can handle large traffic surges with ease.</p>
            </div>


            <div className='feature-card'>
              <div className='scale-image'>
                <img src={zap} alt="" className='scale-img' />
              </div>
              <h3 className='feature-text'>World-class performance</h3>
              <p className='feature-para'>Fast page loads powered by Cloudflare and enterprise-level uptime SLAs make for seamless hosting.</p>
            </div>

            <div className='feature-card'>
              <div className='scale-image'>
                <img src={globe} alt="" className='scale-img' />
              </div>
              <h3 className='feature-text'>End-to-end localization</h3>
              <p className='feature-para'>Create fully localized site experiences for audiences around the world.</p>
            </div>
        </div>
   </section>
  )
}

export default ScalePage
