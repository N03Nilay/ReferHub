import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './DashboardCandidate.css'
import city from './ListOfCities';
import domain from './ListOfDomain';
import company from './ListOfCompany';
import { useNavigate } from 'react-router-dom';

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const DashboardCandidate = () => {
    const navigate = useNavigate()
    const [dataOfEachComp,setdataOfEachComp] = useState([])
    const [showLocationList,setshowLocationList] = useState(0);
    const [stateName,setstateName] = useState("")
    const [showDomainList,setshowDomainList] = useState(0);
    const [domainName,setdomainName] = useState("")
    const [showCompanyList,setshowCompanyList] = useState(0);
    const [companyName,setcompanyName] = useState("")
    const [selectAll,setselectAll] = useState(0)

    useEffect(() => {
        axios.get(`https://refer-hub.onrender.com/api/referral/getreferral` , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    setdataOfEachComp(res.data.referrals)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
    },[])
  return (
    <div>
        <div className="Dash-navbar">
            <div className="nav-list">
                <div className="Dash-logo">
                    <img src="ReferHub (1).png" alt="" />
                </div>
                <div className="Dash-nav-options">
                    <div className="nav-options-list">
                        <img src="icon-of-blank-message-dialogue-box-free-vector-removebg-preview.png" height="40rem" width="40rem" alt=""style={{}} /></div>
                    <div className="nav-options-list">
                        <img src="download-removebg-preview (1).png" height="22rem" width="22rem" alt="" style={{marginTop:"0.6rem"}} onClick={() => {
                            navigate("/notification")
                        }} /></div>
                    <div className="nav-options-list" style={{display:"flex"}}>
                        <img src="6522516-removebg-preview.png" height="30rem" width="30rem" style={{marginTop:"0.4rem"}} alt="" />
                    <img src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="17rem" width="17rem" alt=""style={{marginTop:"0.85rem"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="filters" style={{marginTop:"4rem"}}>
            <div className="all-opt-filter">
                <p onClick={() => {
                    setselectAll(1)
                }}><i>All</i></p>
            </div>
            <div className="location-filter">
                <div style={{display:"flex"}}>
            <div>{(stateName === "")?(<p className='location-filter-head'><i>Location</i></p>) : (<p className='location-filter-head'>{stateName}</p>)}</div>
            <div> {(showLocationList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt="" style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowLocationList(1)
                setshowDomainList(0)
                setshowCompanyList(0);
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowLocationList(0)
            }}  />)}</div>
            </div>
            {(showLocationList === 1) ? (<div className="location-list">
            {city?.map((item) => (
            <div key={item.id}>
                {(item.city !== "Clear") ? 
              (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setstateName(item.city)
                setshowLocationList(0)
              }}>{item.city}</p>) : (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setstateName("")
                setshowLocationList(0)
              }}>{item.city}</p>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="domain-filter">
                <div style={{display:"flex"}}>
            <div>{(domainName === "")?(<p className='domain-filter-head'><i>Domain</i></p>) : (<p className='domain-filter-head'>{domainName}</p>)}</div>
            <div> {(showDomainList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowDomainList(1)
                setshowLocationList(0)
                setshowCompanyList(0);
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowDomainList(0)
                
            }}  />)}</div>
            </div>
            {(showDomainList === 1) ? (<div className="domain-list">
            {domain?.map((item) => (
            <div key={item.id}>
              {(item.domain !== "Clear") ? (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setdomainName(item.domain)
                setshowDomainList(0)
              }}>{item.domain}</p>) : (<p className='loc-comp-dom-name' style={{textAlign:"center",fontSize:"1.3rem"}} onClick={() => {
                setdomainName("")
                setshowDomainList(0)
              }}>{item.domain}</p>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="company-filter">
                <div style={{display:"flex"}}>
            <div>{(companyName === "")?(<p className='company-filter-head'><i>Company</i></p>) : (<p className='company-filter-head'>{companyName}</p>)}</div>
            <div> {(showCompanyList === 0) ? (<img className='upward-arrow' src="free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-2rem"}} onClick={() => {
                setshowCompanyList(1)
                setshowDomainList(0)
                setshowLocationList(0)
                
            }} />) :(<img className='downward-arrow' src="358-3582348_angle-brackets-thin-up-brackets-code-icon-swipe-up-arrow-removebg-preview.png" height="15rem" width="45rem" alt=""style={{marginTop:"2.0rem",marginLeft:"-3rem"}} onClick={() => {
                setshowCompanyList(0)
            }}  />)}</div>
            </div>
            {(showCompanyList === 1) ? (<div className="company-list">
            {company?.map((item) => (
            <div key={item.id}>
              {(item.company !== "Clear") ? (<p className='loc-comp-dom-name' style={{fontSize:"1.3rem"}} onClick={() => {
                setcompanyName(item.company)
                setshowCompanyList(0)
              }}>{item.company}</p>) : (<p className='loc-comp-dom-name' style={{fontSize:"1.3rem"}} onClick={() => {
                setcompanyName("")
                setshowCompanyList(0)
              }}>{item.company}</p>)}
            </div>
          ))}
            </div>) : (<></>)}
            </div>


            <div className="apply-btn">
                <button onClick={() => {
                    
                console.log(accessToken)
                const newDomainname = domainName.split(" ")
                if(stateName === "" && companyName=== "" && domainName=== "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral` , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    setdataOfEachComp(res.data.referrals)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })

                }
                else if(stateName !== "" && companyName=== "" && domainName=== ""){
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?location=${stateName}` , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    setdataOfEachComp(res.data.referrals)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
                }
                else if(stateName === "" && companyName !== "" && domainName=== "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?company=${companyName}` , config)
                    .then((res) => {
                        console.log(res)
                        console.log(config)
                        setdataOfEachComp(res.data.referrals)
                        // console.log(res.data[1].experience)
                        // setLoading(true);
                        // console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log(config)
                    }) 
                }
                else if(stateName === "" && companyName === "" && domainName !== "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?domain=${newDomainname[0]}%20${newDomainname[1]}` , config)
                    .then((res) => {
                        console.log(res)
                        console.log(config)
                        setdataOfEachComp(res.data.referrals)
                        // console.log(res.data[1].experience)
                        // setLoading(true);
                        // console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log(config)
                    }) 
                }
                else if(stateName === "" && companyName !== "" && domainName !== "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?company=${companyName}&domain=${newDomainname[0]}%20${newDomainname[1]}` , config)
                    .then((res) => {
                        console.log(res)
                        console.log(config)
                        setdataOfEachComp(res.data.referrals)
                        // console.log(res.data[1].experience)
                        // setLoading(true);
                        // console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log(config)
                    }) 
                }
                else if(stateName !== "" && companyName !== "" && domainName === "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?company=${companyName}&location=${stateName}` , config)
                    .then((res) => {
                        console.log(res)
                        console.log(config)
                        setdataOfEachComp(res.data.referrals)
                        // console.log(res.data[1].experience)
                        // setLoading(true);
                        // console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log(config)
                    }) 
                }
                else if(stateName !== "" && companyName === "" && domainName !== "")
                {
                    axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?domain=${newDomainname[0]}%20${newDomainname[1]}&location=${stateName}` , config)
                    .then((res) => {
                        console.log(res)
                        console.log(config)
                        setdataOfEachComp(res.data.referrals)
                        // console.log(res.data[1].experience)
                        // setLoading(true);
                        // console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log(config)
                    }) 
                }
                else{
                axios.get(`https://refer-hub.onrender.com/api/referral/getreferral?location=${stateName}&company=${companyName}&domain=${newDomainname[0]}%20${newDomainname[1]}` , config)
                .then((res) => {
                    console.log(res)
                    console.log(config)
                    setdataOfEachComp(res.data.referrals)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
            }
            }}>Apply</button>
            </div>
        </div>
        <div className="main-cards" style={{zIndex:"0"}}>
            <h1>Your Best Job Referrals</h1>
            {dataOfEachComp?.map((item,index) => {
                return(
            <div className="ind-card" key={item._id}>
                <div className="ind-card-flex">
                <div className="left-card">
                    <div className="logo-left">
                    <img src="963312-200-removebg-preview.png" alt="" height="25rem" width="25rem"/>
                    </div>
                    <div className="domain-name">
                    <p>{item.domain}</p>
                    </div>

                </div>
                <div className="centre-card">
                <div className="logo-centre">
                <img src="4440484-removebg-preview.png" alt="" height="25rem" width="25rem"/>
                </div>
                <div className="company-name">
                <p>{item.company}</p>
                </div>

                </div>
                <div className="right-card">
                <div className="logo-right">
                <img src="3-35037_transparent-location-logo-png-png-download-removebg-preview.png" alt="" height="25rem" width="25rem"/>

                </div>
                <div className="location-name">
                <p>{item.location},India</p>
                </div>

                </div>
                </div>
                <div className="job-desc">
                <p>{item.job_description}</p>
                </div>
                <div className="apply-job-btn">
                    <button>Apply Here</button>
                </div>
            </div>
            )})}

            
        </div>
    </div>
  )
}

export default DashboardCandidate