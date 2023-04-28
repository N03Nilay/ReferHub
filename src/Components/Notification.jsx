import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Notification.css'

const accessToken = localStorage.getItem("access token");
// console.log(accessToken)
var config = {
    headers:{
        Authorization: `Bearer ${accessToken}`
    }
}

const Notification = () => {
    const [notification,setnotification] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get("https://refer-hub.onrender.com/api/candidate/getdetails" , config)
                .then((res) => {
                    // console.log(res)
                    // console.log(config)
                    setnotification(res.data.userDetails.notification)
                    console.log(res.data.userDetails.notification)
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
        <div className='main-notification'>

            {notification?.map((item) => {
                return(
                    <>
                     <div className="each-notification">
                        <p>Hurry up Cadet....</p>
                        <p style={{marginTop:"-1rem"}}>A new job is being offered for <b>{item.domain}</b> on<b> {item.location}</b> at <b>{item.company}</b></p>

                     </div>
                     </>
                )
            })} 
            
        </div>
    </div>
  )
}

export default Notification