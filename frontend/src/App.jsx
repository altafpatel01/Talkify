// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/Authcontext.jsx";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}
export default App;
