// Add new chat Document

class Chatroom {
  constructor(room, username){
    this.room = room,
    this.username = username
    this.chats = db.collection('chats')
    this.unsub
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
    this.unsub = this.chats
    .where('room', '==', this.room)
    .orderBy('created_at')
     .onSnapshot(snapshot => {
       snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
           //UI Update
           callback(change.doc.data())

         }
       })
     })
  }

  // Update username
  updateName(username){
    this.username = username
  }

  // Update room
  updateRoom(room){
    this.room = room
    console.log('Room Updated')
    if(this.unsub){
      this.unsub()
    }
  }
}



// setTimeout(() => {
//   chatroom.updateRoom('gaming')
//   chatroom.updateName('Mike')
//   chatroom.getChats(data => console.log(data))
//   chatroom.addChat('hello')
// }, 3000)









