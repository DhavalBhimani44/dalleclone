import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header
    if (!token) {
      return res.status(403).json({ message: 'Authentication required', success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token', success: false });
  }
};

export default authenticateUser;
