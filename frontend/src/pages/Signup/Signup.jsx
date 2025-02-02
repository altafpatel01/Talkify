import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";
import toast from "react-hot-toast";


const SignUp = () => {
	const{signup,loading} = useSignup();
	const [inputs, setInputs] = useState({
		fullname:"",username: '', password: '', confirmPassword: '',gender:""	
	})
	const handleSubmit = async(e) => {
		e.preventDefault();
	await signup(inputs);
	}
	const handleGenderChange = (gender) => {
		setInputs({...inputs, gender})}
	return (
		<>
		{
			loading ?
			<span className="loading loading-infinity loading-lg"></span> :
			<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Talkify</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
						value={inputs.fullname}
						onChange={(e)=>setInputs({...inputs,fullname:e.target.value})} type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
						value={inputs.username}
						onChange={(e)=>setInputs({...inputs,username:e.target.value})} type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
						onChange={(e)=>setInputs({...inputs,password:e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
						onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
						/>
					</div>

					<GenderCheckbox handleGenderChange={handleGenderChange} selectGender={inputs.gender}/>

					<Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
		}</>
	);
};
export default SignUp;