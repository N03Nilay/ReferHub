import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const StatusReferre = () => {
    const navigate = useNavigate()
    const [dataOfEachComp,setdataOfEachComp] = useState([])
    useEffect(() => {
        axios.get("https://refer-hub.onrender.com/api/referral/myreferrals" , config)
                .then((res) => {
                    console.log(res)
                    // console.log(config)
                    setdataOfEachComp(res.data.referrals)
                    // console.log(res.data.userDetails.notification)
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
        <div className="Dash-nav-options" style={{marginTop:"-0.5rem"}}>
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
<h1 style={{textAlign:"center"}}>Your Job Referrals</h1>
<div className='main-StatusReferee'>
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
                    <button onClick={() => {
                        navigate('/CandidatesApplied',{state:{id:item.referral_id}})
                    }}>Candidates Applied</button>
                </div>
            </div>
            )})}
</div>
</div>
  )
}

export default StatusReferre