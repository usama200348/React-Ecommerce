import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { auth, signout } from '../../Firebase/FIrebaseMethod';
import { onAuthStateChanged } from 'firebase/auth';



const Header = () => {  
  const [user,setUser] = useState(null);
  
//Now These UseEffect Will Check That User Is Logged In Or Logged Out While Checking With On Auth State Changed
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    });
    return ()=> unsubscribe();
  },[])
  
  return (
    <>
    
        <div className="navbar bg-amber-400 shadow-sm">
  
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to={'/home'}>KStore</Link>
  </div>
  {/* If The User Is Avaliable Or Logged In Then These Button Will Render In Header */}
  {user && (
    <>
  <div className="flex-none">
  <Link className='btn btn-success ' to={'/AdPost'}>Add Post</Link>
  </div>
  <div className="flex-none ml-5">
  <Link className='btn btn-primary' onClick={signout}>Logout</Link>
  </div>
  </>
  )}
</div>    
    </>
  )
}

export default Header