import React, { useState } from 'react'
import city from './ListOfCities';
import company from './ListOfCompany';
import domain from './ListOfDomain';
import experience from './ListOfExperience';
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
        <div className="main-RegQues" style={{marginTop:"2rem"}}>
            <div className="only-ques">
                <div>
            <p>A few quick Questions : </p>
            <p style={{fontSize:"1.2rem",marginTop:"-2rem"}}>This lets us know how much help to give you along the way . We wont share your answers with anyone else,<br /> including potetial clients .</p>
            </div>
            <div>
                <button className='next-btn' onClick={() => {
                    setcountNext(countNext+1)
                }}>Next</button>
            </div>
            </div>
           
                    {(countNext === 0) ? (<div className="eachQues-reg">
                    <div className="ques-reg">
                        <p>What job role or position are you currently seeking referral for ?</p>
                    </div>
                    <div className='all-ans-reg'>
                    {domain?.map((item) => ( 
                    (item.domain !== "Clear") ? (<div className="ans-reg">
                        <p>{item.domain}</p>
                    </div>) : (<></>)))}
                   
                    </div>
                </div>) : ((countNext === 1) ? (<div className="eachQues-reg">
                    <div className="ques-reg">
                        <p>In which City or Location are you looking for job opportunities ?</p>
                    </div>
                    <div className='all-ans-reg'>
                    {city?.map((item) => ( 
                    (item.city !== "Clear") ? (<div className="ans-reg">
                        <p>{item.city}</p>
                    </div>) : (<></>)))}
                   
                    </div>
                </div>) : ((countNext === 2) ? (<div className="eachQues-reg">
                    <div className="ques-reg">
                        <p>Select the companies you are interested in ?</p>
                    </div>
                    <div className='all-ans-reg'>
                    {company?.map((item) => ( 
                    (item.company !== "Clear") ? (<div className="ans-reg">
                        <p>{item.company}</p>
                    </div>) : (<></>)))}
                   
                    </div>
                </div>) : ((countNext === 3) ? (<div className="eachQues-reg">
                    <div className="ques-reg">
                        <p>What is the level of experience in this industry ?</p>
                    </div>
                    <div className='all-ans-reg'>
                    {experience?.map((item) => ( 
                    (item.experience !== "Clear") ? (<div className="ans-reg">
                        <p>{item.experience} Years</p>
                    </div>) : (<></>)))}
                   
                    </div>
                </div>) : (<></>)))
                )}
              
             
        </div>
    </div>
  )
}

export default RegQues