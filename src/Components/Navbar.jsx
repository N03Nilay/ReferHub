import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  
  return (
    <div>
        <div className="navbar">
            <div className="logo">
            <img src="ReferHub (1).png" alt="" />
            </div>
            <div className="nav-options">
                <ul>
                    <li style={{fontWeight:"bold"}} className='check1'>Home</li>
                    <li className='check1'>About</li>
                    <li className='check1'>How it works?</li>
                    <li className='check-login' style={{marginTop:"-0.3rem",border:"2px solid white",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",borderRadius:"10px"}} onClick={() => {
                        navigate('/login')
                    }}>LogIn</li>
                    <li className='check-register' style={{marginTop:"-0.3rem",border:"2px solid white",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",borderRadius:"10px"}}>Register</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar