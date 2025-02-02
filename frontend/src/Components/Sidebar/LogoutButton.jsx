
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
  const {loading, logout} = useLogout();
  return (
    <div onClick={()=>logout} className='mt-auto'>
   
        {loading ?
        <span className = 'loading loading-infinity loading-lg'></span>:
        <BiLogOut 
        onClick={logout}
        className='w-6 h-6 text-white cursor-pointer'/>}
   
</div>
  )
}

export default LogoutButton