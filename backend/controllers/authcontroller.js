import bcrypt from 'bcryptjs'
import User from "../models/userModel.js";
import { generateJWTToken } from '../utils/generateJWTtoken.js';

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwors doesn't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: " username already exist !" });
    }

    //hash password here
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt)
    //profilepic here
    // https://avatar.iran.liara.run/public/boy?username=[value]
    // https://avatar.iran.liara.run/public/girl?username=[value]

    const boyProfilePic =  `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =  `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newuser = new User({
        fullname,
        username,
        password:hashpassword,
        profilePicture: gender==="male"? boyProfilePic : girlProfilePic,
        gender
    })
    await newuser.save()
    if(newuser){
        generateJWTToken(newuser._id,res)
    }
    res.status(201).json({
        _id:newuser._id,
        fullname:newuser.fullname,
        profilePicture:newuser.profilePicture,
        username:newuser.username
    })
  } catch (error) {
    console.log('internal error at signup controller', error.message)
    res.status(500).json({
        error:error.message,
        message:'internal server error at signup controller'
    })
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

    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            error:"username or password is uncorrect"
        })
    }

    generateJWTToken(user._id , res);
    res.status(201).json({
        _id:user._id,
        fullname:user.fullname,
        profilePicture:user.profilePicture,
        username:user.username
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