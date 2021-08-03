const express = require("express");
const useSocket = require('socket.io');
const app = express();
const server = require('http').Server(app);
const io = useSocket(server);

const PORT = process.env.PORT || 5050


const rooms = new Map([

])

app.get('/user', function(req, res){
    res.json(rooms)
})


io.on('connection', (socket) =>{
    console.log("user connected", socket)
})






server.listen(PORT, (err)=> {
    if(err){
        throw Error(err);
    }
    
    console.log(`Server has been started on port ${PORT}...`);
    });

