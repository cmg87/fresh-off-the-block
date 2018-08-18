const lotion = require('lotion')
 
let app = lotion({
    tendermintPort: 46657,
    initialState: { messages: [] },
    logTendermint: true,
})
 
app.use((state, tx,chainInfo) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
})


app.listen(3006, function() {
    console.log("App running on port  3000 !");
});