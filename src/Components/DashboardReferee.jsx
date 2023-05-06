import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DashboardReferee.css'
import city from './ListOfCities';
import domain from './ListOfDomain';
import company from './ListOfCompany';
import axios from 'axios';

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const DashboardReferee = () => {
    const navigate = useNavigate()
   
    const [dataOfEachComp,setdataOfEachComp] = useState([])
    const [showLocationList,setshowLocationList] = useState(0);
    const [stateName,setstateName] = useState("")
    const [showDomainList,setshowDomainList] = useState(0);
    const [domainName,setdomainName] = useState("")
    const [showCompanyList,setshowCompanyList] = useState(0);
    const [companyName,setcompanyName] = useState("")
    const [selectAll,setselectAll] = useState(0)

    const [jobDesc,setjobDesc] = useState("")
    const [jobTitle,setjobTitle] = useState("")
    const [noOfDays,setnoOfDays] = useState(0)
  return (
    <div>
        <div className="Dash-navbar">
            <div className="nav-list">
                <div className="Dash-logo">
                    <img src="ReferHub (1).png" alt="" />
                </div>
                <div className="Dash-nav-options">
                <div className="nav-options-list">
                        <p style={{fontSize:"1.1rem",fontWeight:"500"}} onClick={() => {
                            navigate("/StatusReferre")
                        }}>Status</p>
                        </div>
                    <div className="nav-options-list">
                        <img src="icon-of-blank-message-dialogue-box-free-vector-removebg-preview.png" height="40rem" width="40rem" alt=""style={{marginTop:"0.7rem"}} /></div>
                    <div className="nav-options-list">
                        <img src="download-removebg-preview (1).png" height="22rem" width="22rem" alt="" style={{marginTop:"1.3rem"}} onClick={() => {
                            navigate("/notification")
                        }} /></div>
                    <div className="nav-options-list" style={{display:"flex"}}>
                        <img src="6522516-removebg-preview.png" height="30rem" width="30rem" style={{marginTop:"1.05rem"}} alt="" />
                    <img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="17rem" width="17rem" alt=""style={{marginTop:"1.5rem"}} />
                    </div>
                </div>
            </div>
        </div>
        <p style={{fontSize:"2.4rem",fontWeight:"500",textAlign:"center",marginTop:"0.5rem"}}>Share a Job referral</p>
        <div className="dashboard-referee-main">
            <div>
            <div className="job-title">
                <textarea name="" id="" cols="30" rows="10" placeholder='Tell your Job Title' value={jobTitle} className='job-title-input-dash-ref' onChange={e => setjobTitle(e.target.value)}></textarea>
                </div>
                <div className="job-desc">
                <textarea name="" id="" cols="30" rows="10" placeholder='Share the Job Description' value={jobDesc} className='job-desc-input-dash-ref' onChange={e => setjobDesc(e.target.value)}></textarea>
                </div>
                <div className="noOfDays">
                    <label htmlFor="numberOfDays">Job Post is availbable for : </label>
                    <input type="number" name='numberOfDays' placeholder='30 days' onChange={e => setnoOfDays(e.target.value)} value={noOfDays} /> <span style={{marginLeft:"0.2rem",fontSize:"1.2rem"}}>days</span>
                </div>
                <div className="filters" style={{marginTop:"0rem",width:"50rem",marginLeft:"4.5rem"}}>
            
            <div className="location-filter">
                <div style={{display:"flex"}}>
            <div>{(stateName === "")?(<p className='location-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"grey"}}><i>Location</i></p>) : (<p className='location-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"black"}}>{stateName}</p>)}</div>
            <div> {(showLocationList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt="" style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowLocationList(1)
                setshowDomainList(0)
                setshowCompanyList(0);
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowLocationList(0)
            }}  />)}</div>
            </div>
            {(showLocationList === 1) ? (<div className="location-list-ref">
            {city?.map((item) => (
            <div key={item.id}>
                {(item.city !== "Clear") ? 
              (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setstateName(item.city)
                setshowLocationList(0)
              }}>{item.city}</p>) : (<></>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="domain-filter">
                <div style={{display:"flex"}}>
            <div>{(domainName === "")?(<p className='domain-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"grey"}}><i>Domain</i></p>) : (<p className='domain-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"black"}}>{domainName}</p>)}</div>
            <div> {(showDomainList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowDomainList(1)
                setshowLocationList(0)
                setshowCompanyList(0);
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowDomainList(0)
                
            }}  />)}</div>
            </div>
            {(showDomainList === 1) ? (<div className="domain-list-ref">
            {domain?.map((item) => (
            <div key={item.id}>
              {(item.domain !== "Clear") ? (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setdomainName(item.domain)
                setshowDomainList(0)
              }}>{item.domain}</p>) : (<></>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="company-filter">
                <div style={{display:"flex"}}>
            <div>{(companyName === "")?(<p className='company-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"grey"}}><i>Company</i></p>) : (<p className='company-filter-head' style={{border:"2px solid rgb(156, 57, 221)",color:"black"}}>{companyName}</p>)}</div>
            <div> {(showCompanyList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowCompanyList(1)
                setshowDomainList(0)
                setshowLocationList(0)
                
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowCompanyList(0)
            }}  />)}</div>
            </div>
            {(showCompanyList === 1) ? (<div className="company-list-ref">
            {company?.map((item) => (
            <div key={item.id}>
              {(item.company !== "Clear") ? (<p className='loc-comp-dom-name' style={{fontSize:"1.3rem"}} onClick={() => {
                setcompanyName(item.company)
                setshowCompanyList(0)
              }}>{item.company}</p>) : (<></>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>
        </div>
        <button className='post-btn' onClick={() => {
            if(stateName === "" || companyName==="" || domainName==="" || jobDesc==="" || noOfDays<=0){
                alert("Please fill the fields properly")
            }
            const passValue = {

                location:stateName,
                company:companyName,
                domain:domainName,
                job_title: jobTitle,
                job_description: jobDesc,
                endDate:noOfDays,
              }
              axios.post("https://refer-hub.onrender.com/api/referral/postreferral", passValue , config)
              .then((res) => {
                if(res.status === 200)
                {
                 
                    alert("Value passed")
                    // navigate('/DashboardCandidate')
                }
                else
                alert("failed")
              }).catch((err) => {
                console.log(err)
              })
        }}>Post</button>

            </div>
        </div>
    </div>
  )
}

export default DashboardReferee