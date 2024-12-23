
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import SignUp from './pages/Signup/Signup.jsx';
import Login from './pages/Login/Login.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
 

  return (
    <>
   
    <div className='p-4 h-screen flex items-center justify-center'>
		<Route path='/login' element={<Login />} />
				<Route path='/signup' element={ <SignUp />} />
		</div>
    </>
  )
}

export default App
