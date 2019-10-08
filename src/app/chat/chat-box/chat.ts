// definition of the interfaces

export interface ChatMessage {
    chatId ? : string,
    message:string,
    createdOn : Date,
    receiverId : string,
    receiverName : string,
    senderId : string,
    senderName : string

}
