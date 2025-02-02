import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authcontext";
import axios from "axios";


const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async ({username, password}) => {
        
		const success = handleInputErrors({username, password});
		if (!success) return;
		setLoading(true);
		try {
			
            const res = await axios.post('/api/v1/login',{username, password})

			const data = res.data.user;
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("Talkify", JSON.stringify(data));
            toast.success(res.data.message);
			setAuthUser(data);
		} catch (error) {
			toast.error(error.response?.data?.error);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors({username, password}) {
    
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
    if(password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

	return true;
}