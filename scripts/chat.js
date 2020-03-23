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
    .where('room', '==', this.room) //Firebase Query .where()
    .orderBy('created_at') // Firebase .orderBy() retrieves all documents in ascending order by document ID
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
          //UI Update
          callback(change.doc.data())

        }// Firebase .onSnapShot() listens to Document for changes
      })
    })
  }

  // Update username
  updateName(username){
    this.username = username
    localStorage.setItem('username', username)
  }

  // Update room
  updateRoom(room){
    this.room = room
    if(this.unsub){
      this.unsub()
    }
  }
}










