import bcrypt from 'bcryptjs'
import User from "../models/userModel.js";
import { generateJWTToken } from '../utils/generateJWTtoken.js';

export const signup = async (req, res) => {
    try {
      const { fullname, username, password, confirmPassword, gender } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords don't match" });
      }
  
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists!" });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Profile picture URLs
      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  
      // Create new user
      const newUser = new User({
        fullname,
        username,
        password: hashedPassword,
        profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        gender,
      });
  
      await newUser.save();
  
      // Generate JWT token and set as cookie
      generateJWTToken(newUser._id, res);
  
      // Respond with success
      return res.status(201).json({
        message: "Signup successful!",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          profilePicture: newUser.profilePicture,
          username: newUser.username,
        },
      });
    } catch (error) {
      console.error("Internal error at signup controller:", error);
      res.status(500).json({
        error: "Internal server error",
        details: error.message,
      });
    }
  };
  

export const login = async(req, res)=>{
    try {
        const {username , password} = req.body
    const user = await User.findOne({username})
    if(!user){
        return res.status(400).json({
            error:"username or password is uncorrect"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            error:"username or password is incorrect"
        })
    }

    generateJWTToken(user._id , res);
    res.status(201).json({
        message:'login successful',
        user:{
            _id:user._id,
            fullname:user.fullname,
            profilePicture:user.profilePicture,
            username:user.username
        }
      
    })
    } catch (error) {
        console.log('internal error at login controller', error.message)
        res.status(500).json({
            error:error.message,
            message:'internal server error at login controller'
        })  
    }


}


export const logout = (req, res) => {
    try {
        res.cookie('token', '', { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: -1})
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log('internal error at logout controller', error.message);
        res.status(500).json({
            error: error.message,
            message: 'internal server error at logout controller'
        });
    }
};