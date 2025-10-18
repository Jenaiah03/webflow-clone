import React from 'react'
import './workSpaceToggle.css'

const WorkSpaceToggle = ({workspacePlans, workspaceCols}) => {
  return (
    <div>
      <div className='pricing-container'>
      {/* plans = overall array */}
      {/* plan = individual object item of the overall array */}
        <div className={`card-grid ${workspaceCols}`}>
            {workspacePlans.map((workspacePlan) => ( 
                <div key={workspacePlans.i} className='card'>
                    <div className='labels'>
                        <span className='label'>{workspacePlan.title.tag}</span>
                        {workspacePlan.badge && <span className='workspace-badge'>{workspacePlan.badge}</span>}
                    </div>
        
                    <p className='price'>{workspacePlan.title.amount}</p>
                    <p className='desc'>{workspacePlan.desc}</p>
                    <button className='card-btn'>{workspacePlan.cta}</button>
                    <h5 className='publishing-head'>PUBLISHING</h5>

                    <ul className='features'>
                        {/* SHORT CIRCUIT CONDITIONAL RENDERING */}
                        {/* condition && expression */}
                        {workspacePlan.publishing && workspacePlan.publishing.map((publish, index ) => (
                            <li key={index}>{publish}</li>
                        ))}
                    </ul>

                    <h5 className='publishing-head'>HOSTING</h5>

                    <ul className='features'>
                        {workspacePlan.hosting && workspacePlan.hosting.map((host, index) => (
                        <li key={index}>{host}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default WorkSpaceToggle
