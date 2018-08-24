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
    console.log(data);
     axios.post("/register", data ).then(
       console.log("Success")
     )
  },
  login: function(data, callback) {
    console.log(data);
    axios.post("/login", data).then((res,err) => {
      if(err) {
        console.log("ERROR", err);
      }
      else {
        console.log("Success", res);
        console.log(callback);
        callback({
          sender: res.data.username
        })
      }
    })
  }
};
