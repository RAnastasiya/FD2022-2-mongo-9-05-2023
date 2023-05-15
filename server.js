const http = require('http');
const mongoose = require('mongoose');

mongoose
.connect('mongodb://172.17.0.2:27017/fd_mongoose')
.catch((error) => {
    console.log('error: ', error);
    process.exit(1);
});

const app = require('./app.js');
const server = http.createServer(app);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log('server started at port: ' + port);
});

// create image 
// sudo docker build -t fd_server_mongo:0.0.1 .
// create container
// sudo docker run -it -p 3005:3000 -e PORT=3000 --name mongo_server_fd fd_server_mongo:0.0.1 