const lotion = require('lotion')
const PORT = process.env.PORT || 3006;
const TENDERMINT_PORT = process.env.TENDERMINT_PORT || 46657;

let app = lotion({
    tendermintPort: TENDERMINT_PORT,
    initialState: { 
        conversations: {} 
    },
    logTendermint: true,
})
 
app.use((state, tx,chainInfo) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
        if(!state.conversations[tx.conversation]) {
            state.conversations[tx.conversation] = [];
        }   
        state.conversations[tx.conversation].push({ sender: tx.sender, message: tx.message });
    }
})

app.listen(PORT, function() {
    console.log(`App running on port  ${PORT} !`);
});