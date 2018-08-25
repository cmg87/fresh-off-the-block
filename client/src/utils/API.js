import axios from "axios";


export default {
  getMessages: function() {
    return axios.get("https://block.chrisgoerler.com/state");
  },
  sendMessage: function(data) {  
    let body = {
        conversation: data.conversation,
        sender: data.sender,
        message: data.message
    }
    console.log("Stuff", body);
    return axios.post("https://block.chrisgoerler.com/txs", body);
  },
  createUser: function(data){
    return axios.post("/api/backend/register", data )
  },
  login: function(data) {
     return axios.post("/api/backend/login", data);
  },
  addConvo: function(data) {
    return axios.post("/api/backend/addConversation", data)
  }
};
