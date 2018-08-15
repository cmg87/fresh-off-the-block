import axios from "axios";


export default {
  getMessages: function() {
    return axios.get("http://localhost:3000/state");
  },
  sendMessage: function(data) {  
    let body = {
        sender: data.sender,
        message: data.message
    }
    console.log("Stuff", body);
    return axios.post("http://localhost:3000/txs", body);
  },
  createUser: function(data){
    let body = {
      username: data.username,
      password: data.password,
      password2: data.password2
    }
    return axios.post("http://localhost:3002/register", body )
  }
};
