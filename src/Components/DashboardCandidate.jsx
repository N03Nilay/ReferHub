import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './DashboardCandidate.css'
import city from './ListOfCities';
import domain from './ListOfDomain';
import company from './ListOfCompany';

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const DashboardCandidate = () => {
    const [dataOfEachInvestor,setdataOfEachInvestor] = useState([])
    const [showLocationList,setshowLocationList] = useState(0);
    const [stateName,setstateName] = useState("")
    const [showDomainList,setshowDomainList] = useState(0);
    const [domainName,setdomainName] = useState("")
    const [showCompanyList,setshowCompanyList] = useState(0);
    const [companyName,setcompanyName] = useState("")
  return (
    <div>
        <div className="navbar">
            <div className="nav-list">
                <div className="logo">
                    <img src="ReferHub (1).png" alt="" />
                </div>
                <div className="nav-options">
                    <div className="nav-options-list">
                        <img src="icon-of-blank-message-dialogue-box-free-vector-removebg-preview.png" height="40rem" width="40rem" alt=""style={{}} /></div>
                    <div className="nav-options-list">
                        <img src="download-removebg-preview (1).png" height="22rem" width="22rem" alt="" style={{marginTop:"0.6rem"}} /></div>
                    <div className="nav-options-list" style={{display:"flex"}}>
                        <img src="6522516-removebg-preview.png" height="30rem" width="30rem" style={{marginTop:"0.4rem"}} alt="" />
                    <img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="17rem" width="17rem" alt=""style={{marginTop:"0.85rem"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="filters" style={{marginTop:"4rem"}}>
            {/* <button onClick={() => {
                console.log(accessToken)
                axios.get("https://refer-hub.onrender.com/api/referral/getreferral?location=Delhi&company=Google&domain=Backend%20developer" , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    // setdataOfEachInvestor(res.data)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
            }}>frontend</button> */}
            <div className="all-opt-filter">
                <p>All</p>
            </div>
            <div className="location-filter">
                <div style={{display:"flex"}}>
            <div>{(stateName === "")?(<p className='location-filter-head'>Location</p>) : (<p className='location-filter-head'>{stateName}</p>)}</div>
            <div> {(showLocationList === 0) ? (<img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowLocationList(1)
            }} />) :(<img src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowLocationList(0)
            }}  />)}</div>
            </div>
            {(showLocationList === 1) ? (<div className="location-list">
            {city?.map((item) => (
            <div key={item.id}>
              <p style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setstateName(item.city)
              }}>{item.city}</p>
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="domain-filter">
                <div style={{display:"flex"}}>
            <div>{(domainName === "")?(<p className='domain-filter-head'>Domain</p>) : (<p className='domain-filter-head'>{domainName}</p>)}</div>
            <div> {(showDomainList === 0) ? (<img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowDomainList(1)
            }} />) :(<img src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowDomainList(0)
            }}  />)}</div>
            </div>
            {(showDomainList === 1) ? (<div className="domain-list">
            {domain?.map((item) => (
            <div key={item.id}>
              <p style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setdomainName(item.domain)
              }}>{item.domain}</p>
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="company-filter">
                <div style={{display:"flex"}}>
            <div>{(companyName === "")?(<p className='company-filter-head'>Company</p>) : (<p className='company-filter-head'>{companyName}</p>)}</div>
            <div> {(showCompanyList === 0) ? (<img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowCompanyList(1)
            }} />) :(<img src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowCompanyList(0)
            }}  />)}</div>
            </div>
            {(showCompanyList === 1) ? (<div className="company-list">
            {company?.map((item) => (
            <div key={item.id}>
              <p style={{fontSize:"1.3rem"}} onClick={() => {
                setcompanyName(item.company)
              }}>{item.company}</p>
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="apply-btn">
                <button onClick={() => {
                    const check = {
                        location:"Delhi",
                        company:"Google",
                        domain:"Backend developer"

                    }
                console.log(accessToken)
                axios.get("https://refer-hub.onrender.com/api/referral/getreferral?"+check , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    // setdataOfEachInvestor(res.data)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
            }}>Apply</button>
            </div>
        </div>
        <div className="main-cards" style={{zIndex:"0"}}>
            
        </div>
    </div>
  )
}

export default DashboardCandidate