import User from '../mongodb/models/User.js';

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        success: false
      });
    }
    res.status(200).json({
      message: 'User profile fetched successfully',
      success: true,
      user: {
        name: user.name,
        email: user.email,
      }
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
};

// Update User Profile (Authenticated user)
const updateUserProfile = async (req, res) => {
  try {
    const { name, username } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        success: false
      });
    }

    user.name = name || user.name;
    await user.save();

    res.status(200).json({
      message: 'User profile updated successfully',
      success: true,
      user: {
        name: user.name,
      }
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
};

// Delete User Account (Authenticated user)
const deleteUserAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        success: false
      });
    }

    res.status(200).json({
      message: 'User account deleted successfully',
      success: true
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
};

export { getUserProfile, updateUserProfile, deleteUserAccount };
