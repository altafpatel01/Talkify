import axios from 'axios';
import  { useState } from 'react'
import { useAuthContext } from '../context/Authcontext'
import toast from 'react-hot-toast';


function useLogout() {
    const {setAuthUser} = useAuthContext();
    const [loading, setLoading] = useState(false)
  const logout = async () =>{
    try {
        setLoading(true);
        const res = await axios.post('/api/v1/logout');
        if(res.status === 200){
            toast.success(res.data.message);}
    localStorage.removeItem('Talkify');
    setAuthUser(null);
    } catch (error) {
       toast.error('An error occured',error.message); 
    }finally{
        setLoading(false);
  }
  }
  return { loading, logout};
}

export default useLogout