import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";
function useSignup() {
  const [loading, setLoading] = useState(false);
  const {  setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleerrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/signup", {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      });

      const user = res.data.user;
      console.log(user);

      await localStorage.setItem("Talkify", JSON.stringify(user) || null);
      setAuthUser(user);
      toast.success(res.data.message);
    } catch (err) {
      const errorMessage = err.response?.data?.error || "An error occurred";
      toast.error(errorMessage); // Show error message from backend
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
}
export default useSignup;

function handleerrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
