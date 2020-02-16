const chatList = document.querySelector('.chat-list')



const chatUI = new chatUI(chatList)
const chatroom = new Chatroom('general', 'Greg')


// Get and Render Chats
chatroom.getChats((data) => {
  console.log(data)
})