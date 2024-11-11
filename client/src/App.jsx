import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, CreatePost, Profile, Signup, Login, Welcome } from './pages';
import { PicLAB } from './assets'

const Header = ({ isLoggedIn, handleLogout }) => (
  <header className="w-full flex justify-between items-center bg-[#0E0E0E] sm:px-8 px-4 py-4">
    <Link to="/">
      <img src={PicLAB} alt="logo" className="w-28 object-contain rounded-lg" />
    </Link>
    <div className="flex gap-4">
      <Link
        to="/"
        className="font-inter font-medium text-white px-4 py-2 relative group"
      >
        Home
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#76B900] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium text-white px-4 py-2 relative group"
      >
        Create
        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#76B900] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>

      {isLoggedIn ? (
        <Link
          to="/login"
          onClick={handleLogout}
          className="font-inter font-medium text-white px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] via-[#FF4500] to-[#FF7F50] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-10">Logout</span>
          <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-[#FF4500] transition-all duration-500 ease-in-out"></span>
        </Link>
      ) : (
        <Link
          to="/signup"
          className="font-inter font-medium text-white px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#7FFF00] via-[#32CD32] to-[#228B22] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-10">Signup/Login</span>
          <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-[#228B22] transition-all duration-500 ease-in-out"></span>
        </Link>
      )}
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full flex justify-center items-center bg-[#0E0E0E] sm:px-8 px-4 py-4">
    <p className="font-inter text-sm text-gray-400">&copy; 2024 PicLAB. All rights reserved.</p>
  </footer>
);

const useLogout = (setIsLoggedIn) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success('User successfully logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return handleLogout;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <BrowserRouter>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ToastContainer />
    </BrowserRouter>
  );
};

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = useLogout(setIsLoggedIn);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#181818] min-h-[calc(100vh-145px)] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
