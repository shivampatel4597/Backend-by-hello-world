
// var prompt = require('prompt-sync')();

// const enter = prompt("enter your full name :");
// console.log(enter)

// const arr = [10,4,2,8,4]

// const filter = arr.filter((item)=>item>4);
// console.log(filter)


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World  my name is shivam patel!');
}).listen(8080);