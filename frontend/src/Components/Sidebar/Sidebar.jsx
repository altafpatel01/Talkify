// import React from 'react'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import SearchInput from './SearchInput.jsx'
function Sidebar() {
  return (
    <div>
        <SearchInput/>
        <div className='divider px-3'></div>

        <Conversations/>
        <LogoutButton/>
        {/* <ConversationList/>
        <LogoutButton/> */}
    </div>
  )
}

export default Sidebar