// import React from 'react'
import { BsPersonFillGear } from 'react-icons/bs'

function Message() {
  const profilePic = <BsPersonFillGear />
  return (
    <div className={`chat chat-end`}>
    <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
        <img alt='Tailwind CSS chat bubble component' src={profilePic} />
      </div>
    </div>
    <div className={`chat-bubble text-white  pb-2`}>my name is altaf</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:11</div>
  </div>
  )
}

export default Message