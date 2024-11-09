import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost, Profile } from './pages'

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Home</Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        <Link to="/user-profile" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Profile</Link>
      </div>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    </main>

    <footer className="w-full flex justify-center items-center bg-white sm:px-8 px-4 py-4 border-t border-t-[#e6ebf4]">
      <p className="font-inter text-sm text-gray-600">&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>
  </BrowserRouter>
);

export default App;
