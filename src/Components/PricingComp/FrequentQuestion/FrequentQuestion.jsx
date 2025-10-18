import React from 'react'
import './frequentQuestion.css'
import { useState } from 'react'

const FrequentQuestion = ({questions,caps}) => {
  const [openIndex,setOpenIndex] = useState(null);
  const [openNumber,setOpenNumber] = useState(null);


  const toggleFrequentQuestion = (index) => {
    setOpenIndex (openIndex === index ? null : index);
  }

  

  const toggleFrequentCap = (number) => {
    setOpenNumber (openNumber === number ? null : number);
  }

  
  return (
  
    <div className="faq-container">
          <div className='faq-upper'>
            <div className='plans-left'>
            <h3>Workspace and Site <br /> Plans</h3>
            </div>
          
            <div className='plans-right'>
              {questions.map((question,index) => (
                <div key={question.id} className="plans-ctn">
                  <div onClick={() => toggleFrequentQuestion(index)} className='plans-item'>
                    <h3 className="plans-question">{question.question}</h3>
                    <span className={`plans-toggle ${openIndex === index ? "open" : ""}`}>
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>

                  <div className={`plans-answer-wrapper ${openIndex === index ? "open" : ""}`}>
                    {openIndex === index && (
                      <div className='answer-content'>
                        {question.answer.map((ans,i) => (
                          <p className="plans-answer" key={i}>{ans}</p>
                      ))}
                      </div>
                    )
                    
                    }
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className='faq-lower'>
            <div className='capabilities-left'>
          <h3>Capabilities and Support <br /> Plans</h3>
        </div>
        
          <div className='capabilities-right'>
            {caps.map((cap,number) => (
              <div key={cap.id} className="capabilities-ctn">
                <div onClick={() => toggleFrequentCap(number)} className='capabilities-item'>
                  <h3 className="capabilities-cap">{cap.question}</h3>
                  <span className={`capabilities-toggle ${openNumber === number ? "open" : ""}`}>
                    {openNumber === number ? "-" : "+"}
                  </span>
                </div>

                <div className={`capabilities-answer-wrapper ${openNumber === number ? "open" : ""}`}>
                  {openNumber === number && (
                    <div className='answer-content'>
                      {cap.answer.map((ans,i) => (
                          <p className="capabilities-answer" key={i}>{ans}</p>
                      ))}
                    </div>
                  )
                  
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
    
    
  )
}

export default FrequentQuestion
