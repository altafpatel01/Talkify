import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwors doesn't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: " user name already exist !" });
    }

    //hash password here
    //profilepic here
    // https://avatar.iran.liara.run/public/boy?username=[value]
    // https://avatar.iran.liara.run/public/girl?username=[value]

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newuser = new User({
        fullname,
        username,
        password,
        profilePicture: gender==="male"? boyProfilePic : girlProfilePic,
        gender
    })
    await newuser.save()

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
