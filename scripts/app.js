// DOM Queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')


// Add new Chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = newChatForm.message.value.trim()
  chatroom.addChat(message)
   .then(() => newChatForm.reset())
   .catch(err => console.log(err))
})

// Class Instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', 'Greg')


// Get and Render Chats
chatroom.getChats(data => chatUI.render(data))