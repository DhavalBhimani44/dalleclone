import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ isLoggedIn, handleLogout }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] px-6 py-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-extrabold text-[#E0E0E0] text-[40px] mb-4">Welcome to PicLAB</h1>
        <p className="text-[#4C4C4C] text-[16px] mb-6">
          Discover and share creative, AI-generated images with our vibrant community. Dive in, get inspired, and contribute your own masterpieces!
        </p>

        <div className="flex gap-4 justify-center">
          {/* Conditionally render buttons based on login status */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="font-inter font-medium text-white px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#7FFF00] via-[#32CD32] to-[#228B22] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-[#228B22] transition-all duration-500 ease-in-out"></span>
              </Link>
              
              <Link
                to="/signup"
                className="font-inter font-medium text-black px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-gray-300 opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10">Signup</span>
                <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-gray-500 transition-all duration-500 ease-in-out"></span>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="font-inter font-medium text-white px-4 py-2 rounded-md relative overflow-hidden group transform transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] via-[#FF4500] to-[#FF7F50] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10">Logout</span>
              <span className="absolute inset-0 border border-transparent rounded-md group-hover:border-[#FF4500] transition-all duration-500 ease-in-out"></span>
            </button>

          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
