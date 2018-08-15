import axios from "axios";


// Export an object with a "search" method that searches the Giphy API for the passed query
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
    return axios.post("/register", body )
  }
};
