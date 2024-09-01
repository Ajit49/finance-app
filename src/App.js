import React, { useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { setUser } from './redux/userSlice';

import LoginPage from './pages/loginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/Homepage';



const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Extract only serializable properties
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(setUser(null));
      }
    });


    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignupPage />} />
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" replace />} />
        
      </Routes>
    </Router>
  );
}

export default App;
