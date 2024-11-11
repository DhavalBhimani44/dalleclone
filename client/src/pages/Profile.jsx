import React, { useState } from 'react';

const Profile = () => {
  // State to manage editing of username
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [newUsername, setNewUsername] = useState(username);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUsername(newUsername);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center bg-[#0C0C0C] px-8 py-6 rounded-xl text-[#E0E0E0] shadow-lg max-w-lg mx-auto">
      <div className="w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Your Profile</h1>

        {/* Profile Info Section */}
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

          {/* Edit Button */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
