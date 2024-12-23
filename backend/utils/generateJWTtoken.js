import JWT from 'jsonwebtoken';

export const generateJWTToken = (userId, res) => {
    const token = JWT.sign(
        { userId }, 
        process.env.JWT_SECRET, 
        { expiresIn: '15d' } // Token expires in 15 days (adjust if you want 15 minutes)
    );

    res.cookie('token', token, {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Cookie expires in 15 days (adjust if you want 15 minutes)
        httpOnly: true

    });

    // res.status(200).json({ message: 'Token generated successfully', token });
};
