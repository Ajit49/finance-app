// src/pages/HomePage.js

import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { clearUser } from '../redux/userSlice';
import Dashboard from '../components/Dashboard';

const HomePage = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
    navigate('/login');
  };

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);  // Dependency array to only trigger when user or navigate changes

  if (!user) {
    // Return null to prevent rendering if user is not logged in
    return null;
  }

  return (
    <div className="p-6 bg-emerald-400">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
      {/* Dashboard Component */}
      <Dashboard />
    </div>
  );
};

export default HomePage;
