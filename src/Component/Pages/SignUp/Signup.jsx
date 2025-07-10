import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../../Firebase/FIrebaseMethod';

const Signup = () => {
  const [name,setName]=useState('');
  const [date,setDate]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const SignUp = ((e)=>{
    const passwordValue = document.getElementById('password').value;
const confirmValue = document.getElementById('Cpassword').value;
    console.log("Hello World From Sign Up");
    if (!passwordValue == confirmValue) {
      alert("Password Not Match Work");
    }
 e.preventDefault();
    signup({email,password})
    
    .then(()=>{
      alert("User Registered Successfully");  
      navigate('/');
    }).catch((error)=>{
      console.log("Error In Firbase Registration" + error);
    })
     
  })
  return (
    <>
     <h1 className='flex justify-center text-4xl mt-18'>User Account Registration</h1>
      <form onSubmit={SignUp}  className="container flex flex-col items-center mt-10 space-y-4">
        <label className="floating-label">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Full Name"
            value={name}
            className="input input-md w-75 p-2"
            required
          />
          <span>Name</span>
        </label>
        <label className="floating-label">
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={date}
            placeholder="Enter Date Of Birth"
            className="input input-md w-75 p-2"
            required
          />
          <span>Date Of Birth</span>
        </label>
        <label className="floating-label">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email Address"
            className="input input-md w-75 p-2"
            required
          />
          <span>Email</span>
        </label>
        <label className="floating-label">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='password'
            placeholder="Enter Password"
            className="input input-md w-75 p-2"
            required
          />
          <span>Password</span>
        </label>
        <label className="floating-label">
          <input
            type="password"
            // value={password}
            id='Cpassword'
            placeholder="Confrim Your Password Please"
            className="input input-md w-75 p-2"
            required
          />
          <span>Confrim Password</span>
        </label>
        <button type="submit" className="btn bg-[#f5f3f3] text-black border-[#e5e5e5]">
          <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
          Register Account
        </button>
        <Link className='btn bg-[#f5f3f3]' to={'/'}>Already Have An Account</Link>
      </form>
    </>
  )
}

export default Signup