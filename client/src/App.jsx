import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { PicLAB } from './assets'
import { Home, CreatePost, Profile } from './pages'
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => (
  <BrowserRouter>
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

        <Link
          to="/signup"
          className="font-inter font-medium text-white px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#7FFF00] via-[#32CD32] to-[#228B22] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-10">Signup/Login</span>
          <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-[#228B22] transition-all duration-500 ease-in-out"></span>
        </Link>
      </div>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#181818] min-h-[calc(100vh-73px)]">
      <div className='flex justify-center items-center w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>

    <footer className="w-full flex justify-center items-center bg-[#0E0E0E] sm:px-8 px-4 py-4">
      <p className="font-inter text-sm text-gray-400">&copy; 2024 PicLAB. All rights reserved.</p>
    </footer>
  </BrowserRouter>
);

export default App;
