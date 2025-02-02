import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
// import { set } from "mongoose";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {

    return ()=>  setSelectedConversation(null);
  
},[setSelectedConversation])
  return (
    <>
      {!selectedConversation ?( <NoChatSelected />) : (
      <div className="md:min-w-[450px] flex flex-col">
        {/* Header */}
        <div className="bg-slate-800 px-4 py-2 mb-2">
          <span className="label-text"></span>{" "}
          <span className="text-sky-500 font-bold">{selectedConversation.fullname}</span>
        </div>

        <Messages />
        <MessageInput />
      </div>
      )}
    </>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
