// Add new chat Document

class Chatroom {
  constructor(room, username){
    this.room = room,
    this.username = username
    this.chats = db.collection('chats')
  }
  async addChat(message){
    // Chat Object
    const now = new Date()
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    // Save Chat
    const responce = await this.chats.add(chat)
    return responce
  }
}

const chatroom = new Chatroom('gaming', 'Greg')

chatroom.addChat('Welcome Everyone')
  .then(() => console.log('Welcome Everyone'))
  .catch(err => console.log(err))

console.log(chatroom)


// real-time listener to get new chats


// Update username


// Update room