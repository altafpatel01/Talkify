import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full flex relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className=' absolute right-2 top-3 text-gray-400'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;