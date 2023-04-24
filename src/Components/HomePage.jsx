import React, { useState } from 'react'
import './HomePage.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const [show5,setShow5] = useState(false);
   const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <div className="main-home" style={{marginTop:"9.7rem"}}>
            <div className="left-main">
                <p className='left-main-p1'>"Your Ticket to Landing Your, <br /> Next Career Opportunity: <br />Refer<span style={{color:"#FF6B00"}}>hub</span>"</p>
                <p className='left-main-p2'>Referhub is a referral-based job platform that connects job seekers <br /> with top employers through their network, simplifying the <br /> hiring process for both parties.</p>
                <div className="left-main-btn">
                    <button>Read More</button>
                    
                    
                    <button onClick={() => {
                        navigate('/register')
                    }}>Register Now</button>
                    
                </div>
                <img className='down-arrow' src="Vector.png" alt="" />

            </div>
            <div className="main-right">
                
                <img src="guy-shows-document-girl-group-young-freelancers-office-have-conversation-working 1.png" alt="" />
            </div>
            <h1 className='why-referhub'>WHY <span style={{color:"#1A1248"}}>REFER</span><span style={{color:"#FF6B00"}}>HUB</span></h1>
            <div className="features">
                <div>
                <div className="box1" style={{display:"flex"}}>
                    <div className="box1-left">
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    <div className="box1-right">
                        <h1 className="box1-right-p1">Get job referrals from top tech companies:</h1>
                        <p className="box1-right-p2">ReferHub partners with some of the biggest names in the tech industry, which means you'll get access to job referrals that you might not find anywhere else.</p>
                        
                    </div>

                </div>
                </div>
                {/* <hr /> */}
                <div>
                <div className="box1" style={{background: "#daeef3"}}>
                <div className="box1-right" style={{marginLeft:"1rem"}}>
                        <h1 className="box1-right-p1">Simplify your job search:</h1>
                        <p className="box1-right-p2">With ReferHub, you don't have to spend hours searching through job boards and filling out endless applications. Our advanced search filters and referral system make the process easy and efficient.
</p>
                        
                    </div>
                    <div className="box1-left" style={{marginLeft:"6rem"}}>
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    
                </div>
                </div>
                {/* <hr /> */}
                <div>
                    <div className="box1">
                    <div className="box1-left">
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    <div className="box1-right">
                        <h1 className="box1-right-p1">Increase your chances of getting hired:</h1>
                        <p className="box1-right-p2">Research shows that referrals are the best way to get hired, and with ReferHub, you'll have access to a network of professionals who can help you land your dream job.</p>
                    </div>
                    </div>
                </div>
                {/* <hr /> */}
                <div>
                <div className="box1" style={{background: "#daeef3"}}>
                <div className="box1-right" style={{marginLeft:"1rem"}}>
                        <h1 className="box1-right-p1">Earn rewards for your referrals:</h1>
                        <p className="box1-right-p2">When you refer a friend or colleague for a job opening, you'll receive a reward if they get hired. It's a win-win situation!
                </p>
                        
                    </div>
                    <div className="box1-left" style={{marginLeft:"6rem"}}>
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    
                </div>
                </div>
                {/* <hr /> */}
                <div>
                <div className="box1">
                    <div className="box1-left">
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    <div className="box1-right">
                        <h1 className="box1-right-p1">Track your referral status:</h1>
                        <p className="box1-right-p2">With ReferHub, you'll be able to keep track of your referral status and get real-time updates on your progress. This means you'll always know where you stand in the hiring process.
</p>
                        
                    </div>

                </div>
                </div>
                {/* <hr /> */}
                <div>
                <div className="box1" style={{background: "#daeef3"}}>
                <div className="box1-right" style={{marginLeft:"1rem"}}>
                        <h1 className="box1-right-p1">Connect with a community of professionals:</h1>
                        <p className="box1-right-p2">ReferHub isn't just a job search platform – it's a community of professionals who are passionate about the tech industry. When you join ReferHub, you'll be able to connect with like-minded individuals and share your experiences and insights.
</p>
                        
                    </div>
                    <div className="box1-left" style={{marginLeft:"6rem"}}>
                        <img className='box1-left-img' src="Rectangle 12.png" alt="" />
                    </div>
                    
                </div>
                </div>
                
            </div>
            <div className="faq">
                <h1 style={{textAlign:"center",fontSize:"2.5rem"}}>Frequently Asked Questions</h1>
                <hr style={{marginTop:"-1rem",width:"70rem"}}/>
                <div className="faq1">
                <div className="faq-ques1" style={{display:"flex"}}>
                <div><p>What's the best thing about OnlyReferrals? </p></div>
                    <div className='plus-minus-faq-icon'>{(show1) ? (<img src="Vector (2).png" onClick={() => {
                        setShow1(false);
                    }} alt="" />) : (<img src="Vector (1).png" onClick={() => {
                        setShow1(true);
                    }} alt="" />)}
                    </div>
                </div>
                {(show1) ? (<div className="faq-ans1">
                <p>No more cold emails or messages on LinkedIn needed for referrals. Just get referrals with one click. Show your interest in companies and your profile will then be visible to alumni working for those companies.
</p>
                </div>) : ("")}
                </div>

                <hr style={{width:"70rem"}} />
                <div className="faq1">
                <div className="faq-ques1" style={{display:"flex"}}>
                <div><p>What's the best thing about OnlyReferrals? </p></div>
                    <div className='plus-minus-faq-icon'>{(show2) ? (<img src="Vector (2).png" onClick={() => {
                        setShow2(false);
                    }} alt="" />) : (<img src="Vector (1).png" onClick={() => {
                        setShow2(true);
                    }} alt="" />)}
                    </div>
                </div>
                {(show2) ? (<div className="faq-ans1">
                <p>No more cold emails or messages on LinkedIn needed for referrals. Just get referrals with one click. Show your interest in companies and your profile will then be visible to alumni working for those companies.
</p>
                </div>) : ("")}
                </div>

                <hr style={{width:"70rem"}} />
                <div className="faq1">
                <div className="faq-ques1" style={{display:"flex"}}>
                <div><p>What's the best thing about OnlyReferrals? </p></div>
                    <div className='plus-minus-faq-icon'>{(show3) ? (<img src="Vector (2).png" onClick={() => {
                        setShow3(false);
                    }} alt="" />) : (<img src="Vector (1).png" onClick={() => {
                        setShow3(true);
                    }} alt="" />)}
                    </div>
                </div>
                {(show3) ? (<div className="faq-ans1">
                <p>No more cold emails or messages on LinkedIn needed for referrals. Just get referrals with one click. Show your interest in companies and your profile will then be visible to alumni working for those companies.
</p>
                </div>) : ("")}
                </div>

                <hr style={{width:"70rem"}} />
                <div className="faq1">
                <div className="faq-ques1" style={{display:"flex"}}>
                <div><p>What's the best thing about OnlyReferrals? </p></div>
                    <div className='plus-minus-faq-icon'>{(show4) ? (<img src="Vector (2).png" onClick={() => {
                        setShow4(false);
                    }} alt="" />) : (<img src="Vector (1).png" onClick={() => {
                        setShow4(true);
                    }} alt="" />)}
                    </div>
                </div>
                {(show4) ? (<div className="faq-ans1">
                <p>No more cold emails or messages on LinkedIn needed for referrals. Just get referrals with one click. Show your interest in companies and your profile will then be visible to alumni working for those companies.
</p>
                </div>) : ("")}
                </div>

                <hr style={{width:"70rem"}} />
                <div className="faq1">
                <div className="faq-ques1" style={{display:"flex"}}>
                <div><p>What's the best thing about OnlyReferrals? </p></div>
                    <div className='plus-minus-faq-icon'>{(show5) ? (<img src="Vector (2).png" onClick={() => {
                        setShow5(false);
                    }} alt="" />) : (<img src="Vector (1).png" onClick={() => {
                        setShow5(true);
                    }} alt="" />)}
                    </div>
                </div>
                {(show5) ? (<div className="faq-ans1">
                <p>No more cold emails or messages on LinkedIn needed for referrals. Just get referrals with one click. Show your interest in companies and your profile will then be visible to alumni working for those companies.
</p>
                </div>) : ("")}
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default HomePage