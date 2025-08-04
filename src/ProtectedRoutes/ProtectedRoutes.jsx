import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'   
import { auth } from '../Firebase/FIrebaseMethod'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({component}) => {
    const [loading,setLoading]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user) {
                const uid = user.uid;
                console.log("Uid" + uid);
                setLoading(false);
            }else{
                navigate('/')
            }
        });
    },[])
    const navigate = useNavigate();
    return(
        loading ? <h1>Loading...</h1> : component
    )
}

export default ProtectedRoutes