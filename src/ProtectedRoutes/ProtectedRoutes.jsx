import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/FIrebaseMethod';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!userLoggedIn) {
    return <Navigate to="/"/>;
  }

  return children;
};

export default ProtectedRoutes;
