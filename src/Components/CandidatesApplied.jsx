import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './CandidatesApplied.css'

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const CandidatesApplied = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.state.id
    const [dataOfEachrefCanApplied,setdataOfEachrefCanApplied] = useState([])
    const [dataOfEachCandidatesApplied,setdataOfEachCandidatesApplied] = useState([])
    useEffect(() => {
        axios.get(`https://refer-hub.onrender.com/api/referral/getlist/${id}` , config)
                .then((res) => {
                    console.log(res)
                    // console.log(config)
                    setdataOfEachCandidatesApplied(res.data)
                    // console.log(res.data[1].experience)
                    // setLoading(true);
                    // console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    console.log(config)
                })
    },[])

    useEffect(() => {
        axios.get(`https://refer-hub.onrender.com/api/referral/getonereferral/${id}` , config)
                .then((res) => {
                    console.log(res)
                    // console.log(config)
                    setdataOfEachrefCanApplied(res.data.refDetails)
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
<div className="main-candidates-applied">
    <div className="referral-can-applied">
<p style={{textAlign:"center",fontSize:"2rem",fontWeight:"400",letterSpacing:"0.05rem"}}>{dataOfEachrefCanApplied.title}</p>
            <p  style={{fontSize:"1.45rem",marginTop:"-1.5rem",textAlign:"center"}}>{dataOfEachrefCanApplied.job_description}</p>
    <div className="ref-info" style={{marginTop:"-1.5rem"}}>
    <div className="company">
                <p>{dataOfEachrefCanApplied.company}</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}}>COMPANY</p>

            </div>
            
            <div className="domain">
            <p>{dataOfEachrefCanApplied.domain}</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}} >DOMAIN</p>
            </div>
            
            <div className="location">
            <p>{dataOfEachrefCanApplied.location},India</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}}>LOCATION</p>
                </div>
    </div>
    </div>
    <h1 style={{textAlign:"center"}}>Candidates Applied</h1>
    <div className='list-of-candidates-applied'>
        {dataOfEachCandidatesApplied?.map((item,index) => 
        { 
            return(   <div className='each-can-applied'>
            <div className="email-can-applied">
                <p style={{fontSize:"1.2rem"}}>{item.email}</p>
            </div>
            <div className='btns-can-applied'>
            <div className="resume-can-applied">
                <button>Resume</button>
            </div>
            <div className="accept-can-applied">
            <button>Accept</button>
            </div>
            <div className="reject-can-applied">
            <button>Reject</button>
            </div>
            </div>
        </div>
        )})}
        
        
        
        
        
        
    </div>

</div>
    </div>
  )
}

export default CandidatesApplied