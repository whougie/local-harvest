import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../../providers/AppProviders';
import "./Auth.css"



export default function AuthPage() {

  const { setCurrentUser } = useAppContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "", lastname: "", signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: ""
  })

  function clearForms() {
    setFormData({ signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: "" })
  }

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSignup(event) {
    event.preventDefault()
    try {
       console.log(formData)
      const response = await fetch("/api/users", {
        method: 'POST',
        body: JSON.stringify({
          firstname:formData.firstname,
          lastname: formData.lastname,
          email: formData.signupEmail,
          password: formData.signupPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      const result = await response.json()
      clearForms()
      console.log(result)
    } catch (err) {
      console.log(err.message)
    }
    // display a message to the user
  }

  async function handleLogin(event) {
    event.preventDefault()
    try {
      const response = await fetch("/api/users/login", {
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
      if (result.status === 'success') {
        window.location.href="/market";
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  // Function to handle User logout
  async function handleLogout(event) {
    event.preventDefault()
    try {
      const response = await fetch("/api/users/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setCurrentUser(null);
        // Clear any client-side stored data (e.g., tokens)
        clearForms();
        navigate("/home"); // Redirect to the home page after logout
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className='authBody'>

      <h2 className='authTitle'>Signup Form</h2>
      <form onSubmit={handleSignup} className='authForm'>

        <label>First Name</label>
        <input type="text" name="firstname" value={formData.firstname || ""} onChange={handleInputChange} />

        <label>Last Name</label>
        <input type="text" name="lastname" value={formData.lastname || ""} onChange={handleInputChange} />

        <label>Email</label>
        <input type="text" name="signupEmail" value={formData.signupEmail || ""} onChange={handleInputChange} />

        <label>Password</label>
        <input type="password" name="signupPassword" value={formData.signupPassword || ""} onChange={handleInputChange} />

        <button type="submit" className='authBtn'>Submit</button>
      </form>


      <h2 className='authTitle'>Login Form </h2>
      <form onSubmit={handleLogin} className='loginForm'>
        <label>Email</label>
        <input type="text" name="loginEmail" value={formData.loginEmail} onChange={handleInputChange} />

        <label>Password</label>
        <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleInputChange} />

        <button type="submit" className='authBtn'>Submit</button>
      </form>

      <form id="logoutForm" onSubmit={handleLogout} className='logoutForm'>
        <button type="submit" className='authBtn'>Logout</button>
      </form>

    </div>
  )
}