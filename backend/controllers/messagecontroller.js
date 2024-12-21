import Message from '../models/messageModel.js';

// Get all messages
export const getAllMessages = async (req, res)=> {
    try {
        const messages = await find();
        res.status(200).json(messages);
    } catch (error) {
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