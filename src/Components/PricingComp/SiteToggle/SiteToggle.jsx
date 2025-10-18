import React from 'react'
import { Link } from 'react-router-dom'
import './siteToggle.css'

const SiteToggle = ({plans, cols}) => {
  return (
    <div className='pricing-container'>
      {/* plans = overall array */}
      {/* plan = individual object item of the overall array */}
        <div className={`cards-grid ${cols}`}>
            {plans.map((plan) => ( 
                <div key={plans.i} className='card'>
                    <div className='labels'>
                        <span className='label'>{plan.title.tag}</span>
                        {plans.badge && <span className='plan-badge'>{plan.badge}</span>}
                    </div>
        
                    <p className='price'>{plan.title.amount}</p>
                    <p className='desc'>{plan.desc}</p>
                    <button className='card-btn'>{plan.cta}</button>
                    <h5 className='publishing-head'>PUBLISHING</h5>

                    <ul className='features'>
                        {/* SHORT CIRCUIT CONDITIONAL RENDERING */}
                        {/* condition && expression */}
                        {plan.publishing && plan.publishing.map((publish, index ) => (
                            <li key={index}>{publish}</li>
                        ))}
                    </ul>

                    <h5 className='publishing-head'>HOSTING</h5>

                    <ul className='features'>
                        {plan.hosting && plan.hosting.map((host, index) => (
                        <li key={index}>{host}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SiteToggle

