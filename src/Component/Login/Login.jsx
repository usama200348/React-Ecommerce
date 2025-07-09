import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { login } from '../../Firebase/FIrebaseMethod';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // const navigate = useNavigate();
  const Login_user =()=>{
    console.log("Hello World");
    
    // login({email,password})
    // .then(()=>{
    //   alert("User Logged In Successfully");
    //   console.log("Hello World");
    //   navigate('/home')
    // })
    // .catch((error)=>{
    //   console.log("Error Logging Using Firbase " + error.message);
      
    // })
  }
  return (
    <>
    <div>
    <h1 className='flex justify-center text-4xl mt-18'>Login Page</h1>
    <div className="container flex flex-col items-center mt-10 space-y-4">
      <label className="floating-label">
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" className="input input-md w-75 p-2" />
  <span>Email</span>
</label>
      <label className="floating-label">
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" className="input input-md w-75 p-2" />
  <span>Password</span>
</label>
<button onClick={Login_user}  className="btn bg-[#f5f3f3] text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</button>
<Link className='btn bg-[#f5f3f3]' to={'/register'}>Already Have An Account</Link>
    </div>
    </div>
    </>
  )
}

export default Login