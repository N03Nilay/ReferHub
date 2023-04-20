import React, { useState } from 'react'
import {useFormik} from "formik";
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import axios from 'axios';

const initialValues = {
    email: "",
    username: "",
    password: "",
    role_id: "",
  };

const Check = () => {
    const [captcha,setcaptcha] = useState(false);
  const [user, setUser] = useState({});
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: (values,action) => {
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

    
      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
          var letters = /^[a-zA-Z][a-zA-Z ]*$/;
          var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var mobnum = /(0|91)?[6-9][0-9]{9}/;
      if(username==="" && email==="" && password === "" )
      {
        alert("please fill all the fields");
      }
else if(username==='')
    {
        alert('Please enter your Name');
    }
    else if(!letters.test(username))
    {
        alert('Name field required only alphabet characters');
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
        name: username,
        password: password,
        Role_id: "100",

      }
      axios.post("https://refer-hub.onrender.com/api/auth/register", signup)
      .then((res) => {
        if(res.status === 200)
        {
            alert("Registration done")
        }
        else
        alert("Registration failed")
      }).catch((err) => {
        console.log(err)
      })

  action.resetForm();
}
    },
  });
  return (
    <div>
        <h1>Register</h1>
        <form className='form-create' onSubmit={handleSubmit}>
        <div className='email-heading'>
            <input type="email" name='email' id='email' placeholder='E-mail id' autoComplete='off'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='username-heading'>
        
        <input type="username" name='username' id='username' placeholder='First and Last Name' autoComplete='off'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}/>
        <br />
        </div>
       
        
        <div className='password-heading'>
        <input type="password"  name='password' id='password' placeholder='Set Password' autoComplete='off'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='password-heading'>
        <input type="number"  name='role_id' id='role_id' placeholder='role_id' autoComplete='off'
        value={values.role_id}
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

export default Check