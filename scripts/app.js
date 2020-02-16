// DOM Queries
const chatList = document.querySelector('.chat-list')


// Class Instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', 'Greg')


// Get and Render Chats
chatroom.getChats((data) => {
  chatUI.render(data)
})