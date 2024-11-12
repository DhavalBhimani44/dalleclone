import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Fetch user data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://dalleclone-a8np.onrender.com/api/v1/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsername(response.data.user.name);
        setEmail(response.data.user.email);
        setNewUsername(response.data.user.name);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };
    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        'https://dalleclone-a8np.onrender.com/api/v1/profile',
        { name: newUsername },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setUsername(newUsername);
      setIsEditing(false);
      toast.success('Username updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update username.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('https://dalleclone-a8np.onrender.com/api/v1/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success('Account deleted successfully!');
      localStorage.removeItem('token');
      setTimeout(() => navigate('/signup'), 2000); // Redirect to signup page after 2 seconds
    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error('Failed to delete account.');
    }
  };

  return (
    <div className="flex justify-center items-center px-8 py-6 text-[#E0E0E0] max-w-lg mx-auto h-screen">
      <div className='flex justify-center items-center bg-[#0C0C0C] w-full h-fit px-8 py-6 shadow-lg rounded-xl'>
        <ToastContainer />
        <div className="w-full">
          <h1 className="text-3xl font-extrabold mb-6 text-center">Your Profile</h1>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-lg font-semibold">Loading profile...</p>
            </div>
          ) : (
            <div className="bg-[#1A1A1A] p-6 rounded-lg mb-6">
              <div className="mb-4">
                <span className="text-lg font-medium">Username: </span>
                {!isEditing ? (
                  <span className="text-lg text-[#7FFF00]">{username}</span>
                ) : (
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="bg-[#333333] text-[#E0E0E0] px-4 py-2 rounded-md w-full mt-2"
                  />
                )}
              </div>

              <div className="mb-4">
                <span className="text-lg font-medium">Email: </span>
                <span className="text-lg text-[#7FFF00]">{email}</span>
              </div>

              <div className="flex justify-between">
                {!isEditing ? (
                  <button
                    onClick={handleEditClick}
                    className="bg-[#FF7F50] hover:bg-[#FF4500] text-white px-6 py-2 rounded-md transition-all duration-300"
                  >
                    Edit Username
                  </button>
                ) : (
                  <button
                    onClick={handleSaveClick}
                    className="bg-[#32CD32] hover:bg-[#228B22] text-white px-6 py-2 rounded-md transition-all duration-300"
                  >
                    Save Changes
                  </button>
                )}
                <button
                  onClick={handleDeleteAccount}
                  className="bg-[#DC143C] hover:bg-[#B22222] text-white px-6 py-2 rounded-md transition-all duration-300 ml-4"
                >
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
