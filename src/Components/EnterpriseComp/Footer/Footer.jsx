import { Link } from 'react-router-dom'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import linkedin from '../../../assets/linked.png'
import tikTok from '../../../assets/tik-tok.png'
import twitter from '../../../assets/twitter.png'
import web from '../../../assets/webFlow.svg'
import webImage from '../../../assets/webFlow2.png'
import youtube from '../../../assets/youtube.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-ctn'>
        <div className='footer-upSection'>
            <div className='product-ctn'>
                <h3 className='link-head'>PRODUCT</h3>
                <ul className='product-links'>
                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Platform</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Design</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Edit Mode</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Interactions</a>                        
                        </Link>
                    </li>
                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Page building <span>NEW</span> </a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Shared Libraries <span>NEW</span> </a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">CMS</a>                        
                        </Link>
                    </li>
                    
                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Hosting</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Localization</a>                        
                        </Link>
                    </li>


                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Security</a>                        
                        </Link>
                    </li>


                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Ecommerce</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Analyze <span>NEW</span></a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Optimize <span>NEW</span></a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">SEO</a>                        
                        </Link>
                    </li>


                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">DevLink <span>LABS</span></a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Figma to Webflow <span>LABS</span></a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">Accessibility</a>                        
                        </Link>
                    </li>

                    <li className="product-item">
                        <Link to=''>
                            <a href="#" className="href-link">AI</a>                        
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='support-content'>
                <h3 className='link-head'>SUPPORT</h3>
                <ul className='support-links'>
                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Enterprise</a>                        
                        </Link>
                    </li>

                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Startups</a>                        
                        </Link>
                    </li>

                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Global alliances</a>                        
                        </Link>
                    </li>

                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Agencies</a>                        
                        </Link>
                    </li>

                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Freelancers</a>                        
                        </Link>
                    </li>

                    <li className="support-item">
                        <Link to=''>
                            <a href="#" className="href-link">Classrooms</a>                        
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='resources-content'>
                <h3 className='link-head'>RESOURCES</h3>
                <ul className='resource-link' >
                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">University</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Blog</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Customer stories</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Webinars and ebooks</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Apps</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Libraries</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Templates</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Developers</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Made in Webflow</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Glossary</a>                        
                        </Link>
                    </li>

                    <li className="resource-item">
                        <Link to=''>
                            <a href="#" className="href-link">Lifestreams</a>                        
                        </Link>
                    </li>

                </ul>
            </div>

            <div className='company-content'>
                <h3 className='link-head'>COMPANY</h3>
                <ul className='company-link'>
                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">About</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Press</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Webflow Shop</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Privacy policy</a>                        
                        </Link>
                    </li>


                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Cookie preferences</a>                        
                        </Link>
                    </li>


                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Sitemap</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Careers <span>WE'RE HIRING</span></a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Webflow Ventures</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Terms of Service</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Cookie policy</a>                        
                        </Link>
                    </li>

                    <li className="company-item">
                        <Link to=''>
                            <a href="#" className="href-link">Accessibility statement</a>                        
                        </Link>
                    </li>
                    
                </ul>
            </div>

            <div className='community-content'>
                <h3 className='link-head'>COMMUNITY</h3>
                <ul className='community-link'>
                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Discover the community</a>                        
                        </Link>
                    </li>
                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Certified Partners</a>                        
                        </Link>
                    </li>

                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Become an affiliate</a>                        
                        </Link>
                    </li>

                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Find a meetup near you</a>                        
                        </Link>
                    </li>


                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Partner with Webflow</a>                        
                        </Link>
                    </li>


                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Become a template designer</a>                        
                        </Link>
                    </li>


                    <li className="community-item">
                        <Link to=''>
                            <a href="#" className="href-link">Become a Global Leader</a>                        
                        </Link>
                    </li>

                </ul>
            </div>

            <div className='help-content'>
                <h3 className='link-head'> GET HELP</h3>
                <ul className='help-link'>
                    <li className="help-item">
                        <Link to=''>
                            <a href="#" className="href-link">Support</a>                        
                        </Link>
                    </li>

                    <li className="help-item">
                        <Link to=''>
                            <a href="#" className="href-link">Status</a>                        
                        </Link>
                    </li>

                    <li className="help-item">
                        <Link to=''>
                            <a href="#" className="href-link">Wishlist</a>                        
                        </Link>
                    </li>

                    <li className="help-item">
                        <Link to=''>
                            <a href="#" className="href-link">Pricing</a>                        
                        </Link>
                    </li>

                    <li className="help-item">
                        <Link to=''>
                            <a href="#" className="href-link">Forum</a>                        
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <hr />

        <div className='footer-downSection'>
            <div className='year-text'>
                <h4 className='text-ctn'>© 2025 Webflow, Inc. All rights reserved</h4>
            </div>

            <div className='weblogo'>
                <img src={webImage} className='webImg' alt="" />
            </div>

            <div className='logos'>
                <img src={web} alt="" className='img' />
                <img src={youtube} alt="" className='img' />
                <img src={twitter} alt="" className='img' />
                <img src={facebook} alt="" className='img' />
                <img src={linkedin} alt="" className='img' />
                <img src={instagram} alt="" className='img' />
                <img src={tikTok} alt="" className='img' />
            </div>
        </div>

        
    </div>
  )
}

export default Footer
