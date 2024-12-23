import JWT from 'jsonwebtoken';
import User from '../models/userModel.js';


export const protectedRoute = async (req, res, next) => {
    
    const { token } = req.cookies;
   

    // If no token is found
    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

    try {
        // Verify the token
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        // Ensure decoded structure is valid
        if (!decoded || !decoded.userId) {
            return res.status(401).json({ message: 'Invalid token structure' });
        }

        // Find user based on userId from the decoded token
        const user = await User.findById(decoded.userId).select('-password');

        // If user is not found
        if (!user) {
            return res.status(404).json({ message: 'Invalid user or token' });
        }

        // Attach user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle token expiration
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired, please log in again' });
        }

        // Handle other errors such as JWT malformed or other verification issues
        console.error('JWT verification error:', error);
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }
};

