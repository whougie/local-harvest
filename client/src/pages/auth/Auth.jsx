import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Auth.css"



export default function AuthPage(){

  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: ""
  })

  function clearForms(){
    setFormData({ signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: "" })
  }

  function handleInputChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSignup(event){
    event.preventDefault()
    try {
      const response = await fetch("/api/user", {
        method: 'POST',
        body: JSON.stringify({
          email: formData.signupEmail,
          password: formData.signupPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      clearForms()
    } catch(err){
      console.log(err)
    }
    // display a message to the user
  }

  async function handleLogin(event){
    event.preventDefault()
    try {
      const response = await fetch("/api/user/login", {
        method: 'POST',
        body: JSON.stringify({
          email: formData.loginEmail,
          password: formData.loginPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      clearForms()
      if( result.status === 'success' ){
        navigate("/");
      }
    } catch(err){
      console.log(err.message)
    }
  }


  return (
    <div className='authBody'>

      <h2 className='authTitle'>SignupForm</h2>
      <form onSubmit={handleSignup} className='authform'>
        <label>Email</label>
        <input type="text" name="signupEmail" value={formData.signupEmail} onChange={handleInputChange} />

        <label>Password</label>
        <input type="password" name="signupPassword" value={formData.signupPassword} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>


      <h2 className='authTitle'>Login Form </h2>
      <form onSubmit={handleLogin} className='loginForm'>
        <label>Email</label>
        <input type="text" name="loginEmail" value={formData.loginEmail} onChange={handleInputChange} />

        <label>Password</label>
        <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}