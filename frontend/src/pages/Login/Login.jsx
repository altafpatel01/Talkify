// import React from 'react'
// import Link from 'react-router-dom'

import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

function Login() {
	const [logininputs, setLoginInputs] = useState({username: '', password: ''});
	const {loading, login} = useLogin();

	const handlelogin = (e) => {
		e.preventDefault();
		login(logininputs);
		
	}
    return (
        		<>{
					loading ? 
					<span className="loading loading-infinity loading-lg"></span>:(
						<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        				<h1 className='text-3xl font-semibold text-center text-gray-300'>
        					Login
        					<span className='text-blue-500'> ChatApp</span>
        				</h1>
        
        				<form onSubmit={handlelogin} >
        					<div>
        						<label className='label p-2'>
        							<span className='text-base label-text'>Username</span>
        						</label>
        						<input 
								value={logininputs.username}
								onChange={(e) =>setLoginInputs({...logininputs,username:e.target.value})} type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
        					</div>
        
        					<div>
        						<label className='label'>
        							<span className='text-base label-text'>Password</span>
        						</label>
        						<input
								value={logininputs.password}
								onChange={(e)=>setLoginInputs({...logininputs,password:e.target.value})}
        							type='password'
        							placeholder='Enter Password'
        							className='w-full input input-bordered h-10'
        						/>
        					</div>
        					<Link to={'/signup'} className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
        						{"Don't"} have an account?
        					</Link>
        
        					<div>
        						<button type='submit' className='btn btn-block btn-sm mt-2'>Login</button>
        					</div>
        				</form>
        			</div>
        		</div>

					)
				}</>        	
			);
}

export default Login;
