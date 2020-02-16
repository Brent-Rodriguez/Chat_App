// DOM Queries
const chatList = document.querySelector('.chat-list')


// Class Instances
const chatUI = new chatUI(chatList)
const chatroom = new Chatroom('general', 'Greg')


// Get and Render Chats
chatroom.getChats((data) => {
  chatUI.render(data)
})