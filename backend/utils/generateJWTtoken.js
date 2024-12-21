import JWT from 'jsonwebtoken';

export const generateJWTToken = (userId, res) => {
    const token =  JWT.sign(
        { userId }, 
        process.env.JWT_SECRET, 
        { expiresIn: '15m' } // Token expires in 15 minutes
    );

    res.cookie(`token`, token, {
        expires: new Date(Date.now() + 900000), // Cookie expires in 15 minutes
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        sameSite: 'strict', // Helps prevent CSRF attacks
    });

    // res.status(200).json({ message: 'Token generated successfully', token });
};
