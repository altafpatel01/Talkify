import User from "../models/userModel.js";

 const getUsers = async (req, res) => {
  try {
    const loggeduser = req.user._id;
    const users = await User.find({_id:{$ne:loggeduser}}).select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.log("internal server error in getusers controller", error.message);
    res.status(500).json({ message: error.message });
  }
}

export default getUsers;