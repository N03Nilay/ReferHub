import React, { useState } from 'react'
import {useFormik} from "formik";
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    email: "",
    
    password: "",
    
  };
  var accessToken = "";

const Login = () => {
  const navigate = useNavigate();
    const [captcha,setcaptcha] = useState(false);
  const [user, setUser] = useState({});
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: (values,action) => {
     
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

    
      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
          var letters = /^[a-zA-Z][a-zA-Z ]*$/;
          var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var mobnum = /(0|91)?[6-9][0-9]{9}/;
      if(email==="" && password === "" )
      {
        alert("please fill all the fields");
      }
    else if(email==='')
    {
        alert('Please enter your email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(password==='')
    {
        alert('Please enter Password');
    }
else if(document.getElementById("password").value.length < 5){
  alert("length should be minimum of 5 charaters")
}
else{
    const signup = {
        email: email,
        
        password: password,
        

      }
      axios.post("https://refer-hub.onrender.com/api/auth/login", signup)
      .then((res) => {
        if(res.status === 200)
        {
            console.log(res);
            accessToken = res.data.token;
          localStorage.setItem("access token" , accessToken )
            alert("Logged in done")
            navigate('/DashboardCandidate')
        }
        else
        alert("failed")
      }).catch((err) => {
        console.log(err)
      })

  action.resetForm();
}
    },
  });
  return (
    <div>
        <h1>LOG IN</h1>
        <form className='form-create' onSubmit={handleSubmit}>
        <div className='email-heading'>
            <input type="email" name='email' id='email' placeholder='E-mail id' autoComplete='off'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
       
        
        <div className='password-heading'>
        <input type="password"  name='password' id='password' placeholder='Set Password' autoComplete='off'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div style={{display:"flex"}}>
          <div className="captcha">
            {/* <ReCAPTCHA style={{transform:"scale(0.95)",transformOrigin:"0 0",marginLeft:"2rem",marginTop:"1rem"}}
    sitekey="6Lf6JPIjAAAAANP9Fcj7qxku87LThyJ9HJ3Cjp_7"
    onChange={(value) => {setcaptcha(true)}}
  /> */}
          </div>
          <div>
        <button type='submit'  className="create-btn">Create</button>
        </div>
        </div>
        
      </form>

    </div>
  )
}

export default Login