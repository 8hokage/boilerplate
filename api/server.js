const app = require("express")();
const http = require('http').createServer(app);
const io = require('socket.io').listen(server);

const app = express();

app.get("/", function(request, response){
    response.send("ok");
});

app.listen(4400, () => {
  console.log(111);
});

io.on('connection', (socket) => {
  socket.emit('welcome', {
    message: 'Hello socket',
  });
})
