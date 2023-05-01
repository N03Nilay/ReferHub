import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './EachReferral.css'

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const EachReferral = () => {
     const location = useLocation()
    const navigate = useNavigate()
    const id = location.state.id
    const [dataOfEachref,setdataOfEachref] = useState([])
    useEffect(() => {
        axios.get(`https://refer-hub.onrender.com/api/referral/getonereferral/${id}` , config)
                .then((res) => {
                    console.log(res)
                    // console.log(config)
                    setdataOfEachref(res.data.refDetails)
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
        <div className="each-ref-main">
        <div className="left-each-ref">
            <p style={{textAlign:"center",fontSize:"2rem",fontWeight:"400",letterSpacing:"0.05rem"}}>First Time Jobbers</p>
            <p className='job-desc'>{dataOfEachref.job_description}</p>
            <div className="buttons-eachReferral" style={{display:"flex",justifyContent:"space-around"}}>
                <div className='tot-fig-eachRef'>
                    
                        {(dataOfEachref.candidatesApplied === null) ? (<p style={{textAlign:"center",fontSize:"1.45rem"}}>0/650</p>) : (<p style={{textAlign:"center",fontSize:"1.45rem"}}>{dataOfEachref.candidatesApplied}/650</p>)}
                        
                    <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",textAlign:"center",fontWeight:"500"}}>Registered Candidates</p>

                </div>
                <div>
                <button className='reg-btn-eachReferral'>
                    Register
                </button>
                </div>
            </div>

        </div>
        <div className="right-each-ref">
            <div style={{marginTop:"5rem"}}>
            <div className="company">
                <p>{dataOfEachref.company}</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}}>COMPANY</p>

            </div>
            <hr style={{width:"15rem"}}/>
            <div className="domain">
            <p>{dataOfEachref.domain}</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}} >DOMAIN</p>
            </div>
            <hr style={{width:"15rem"}}/>
            <div className="location">
            <p>{dataOfEachref.location},India</p>
                <p style={{fontSize:"1.2rem",marginTop:"-1.1rem",fontWeight:"500"}}>LOCATION</p>
                </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default EachReferral