import JWT from 'jsonwebtoken';
import  User  from '../models/userModel.js';

export const protectedRoute = async (req, res, next) => {
    

   const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'invalid user or token' });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

}
