import axios from "axios";


export default {
  getMessages: function() {
    return axios.get("https://block.chrisgoerler.com/state");
  },
  sendMessage: function(data) {  
    let body = {
        sender: data.sender,
        message: data.message
    }
    console.log("Stuff", body);
    return axios.post("https://block.chrisgoerler.com/txs", body);
  },
  createUser: function(data){
    return axios.post("/register", data )
  },
  login: function(data) {
     return axios.post("/login", data);
  }
};
