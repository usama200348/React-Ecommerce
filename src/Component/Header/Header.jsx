import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {  
  return (
    <>
    
        <div className="navbar bg-amber-400 shadow-sm">
  
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">KStore</a>
  </div>
  <div className="flex-none">
  <Link className='btn btn-success' to={'/AdPost'}>Add Post</Link>
  </div>
</div>    
    </>
  )
}

export default Header