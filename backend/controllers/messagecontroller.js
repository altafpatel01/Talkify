import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';

// Get all messages
export const getMessages = async (req, res)=> {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({participants:{$all:[senderId,userToChatId]}}).populate('messages');
        

        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log('internal server error in getmessages controller',error.message);
        res.status(500).json({ message: error.message });

        
    }
}

// Get messages by chat ID
export const getMessagesByChatId = async (req, res)=> {
    try {
        const messages = await find({ chatId: req.params.chatId });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new message
export const sendMessage =   async(req, res)=> {
   try {
    const {message} = req.body;
   const senderId = req.user._id;
   const {id:recieverId} = req.params;

   let conversation = await Conversation.findOne({participants:{$all:[senderId,recieverId]}});

   if(!conversation){
       conversation = await Conversation.create({participants:[senderId,recieverId]});
    }
    const newMessage = new Message({recieverId,senderId,message});
    if(newMessage){
        conversation.messages.push(newMessage._id);
       
    }
    await Promise.all([newMessage.save(),conversation.save()]);
    res.status(201).json(newMessage);
   } catch (error) {
    console.log('internal server error in sendmessage controller',error.message);
    res.status(500).json({ message: error.message });
   }
}



// Delete a message by ID
export const deleteMessage= async (req, res) =>{
    try {
        const message = await findById(req.params.id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        await message.remove();
        res.status(200).json({ message: 'Message deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}