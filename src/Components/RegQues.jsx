import React, { useState } from 'react'
import quesAns from './QuesAfterReg'
import './RegQues.css'

const RegQues = () => {
    const [countNext,setcountNext] = useState(0);
  return (
    <div>
        <div className="Dash-navbar">
            <div className="nav-list">
                <div className="Dash-logo">
                    <img src="ReferHub (1).png" alt="" />
                </div>
                <div className="Dash-nav-options">
                    
                    <div className="nav-options-list" style={{display:"flex"}}>
                        <img src="6522516-removebg-preview.png" height="30rem" width="30rem" style={{marginTop:"0.4rem"}} alt="" />
                    <img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="17rem" width="17rem" alt=""style={{marginTop:"0.85rem"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="main-RegQues" style={{marginTop:"5rem"}}>
            <div className="only-ques">
                <div>
            <p>A few quick Questions : </p>
            </div>
            <div>
                <button className='next-btn' onClick={() => {
                    setcountNext(countNext+1)
                }}>Next</button>
            </div>
            </div>
            {<div className="each-ques">
            <p style={{fontSize:"2rem",marginLeft:"4rem",marginTop:"1rem"}}>{quesAns[countNext].ques}</p>
            <div className='all-ans' >
            <div className="each-ans">
                <p>{quesAns[countNext].opt}</p>
            </div>
            
            
            </div>
            </div>}
        </div>
    </div>
  )
}

export default RegQues