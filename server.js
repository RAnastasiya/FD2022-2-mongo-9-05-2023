const http = require('http');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fd_mongoose').catch((error) => console.log('error: ', error));

const app = require('./app.js');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('server started at port: ' + port);
});
