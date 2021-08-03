const express = require('express');
const app = express()


app.get('/user', function(req, res){
    res.send("<div>Hellow</div>")
})

app.listen(3010, 'Server has been started');