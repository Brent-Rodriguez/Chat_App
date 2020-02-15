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

  // real-time listener to get new chats
  getChats(callback){
    this.chats
    .where('room', '==', this.room)
     .onSnapshot(snapshot => {
       snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
           //UI Update
           callback(change.doc.data())

         }
       })
     })
  } 
}

const chatroom = new Chatroom('gaming', 'Greg')

// chatroom.addChat('Welcome Everyone')
//   .then(() => console.log('Welcome Everyone'))
//   .catch(err => console.log(err))

chatroom.getChats((data) => {
  console.log(data)
})






// Update username


// Update room