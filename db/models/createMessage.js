

Message.createMessage = (text , sender ,  receiver) => {
  return Promise.all([
    Message.create({
      text,
      user: {
        _id: sender.id , 
        name: sender.name
      }
    }),
    conn.models.conversation.findOrCreateConversation(sender.id , receiver.id)
  ])
  .then(([message , conversation]) => message.setConversation(conversation))
}