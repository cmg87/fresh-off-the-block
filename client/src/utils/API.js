import axios from "axios";


export default {
  getMessages: function() {
    return axios.get("http://localhost:3006/state");
  },
  sendMessage: function(data) {  
    let body = {
        conversation: data.conversation,
        sender: data.sender,
        message: data.message
    }
    console.log("Stuff", body);
    return axios.post("http://localhost:3006/txs", body);
  },
  createUser: function(data){
    return axios.post("/register", data )
  },
  login: function(data) {
     return axios.post("/login", data);
  },
  addConvo: function(data) {
    return axios.post("/addConversation", data)
  }
};
