// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "./index.css";
// import { Routes, Route } from "react-router-dom";
// import SignUp from "./pages/Signup/Signup.jsx";
// import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Home />
        {/* <SignUp /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
