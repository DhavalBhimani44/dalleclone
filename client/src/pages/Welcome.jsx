import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] px-6 py-4">
      <div className="text-center max-w-2xl">
        <h1 className="font-extrabold text-[#E0E0E0] text-[40px] mb-4">Welcome to PicLAB</h1>
        <p className="text-[#4C4C4C] text-[16px] mb-6">
          Discover and share creative, AI-generated images with our vibrant community. Dive in, get inspired, and contribute your own masterpieces!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="font-inter font-medium bg-[#9DD245] text-white px-6 py-3 rounded-md">
            Login
          </Link>
          <Link to="/signup" className="font-inter font-medium bg-white text-black px-6 py-3 rounded-md">
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
