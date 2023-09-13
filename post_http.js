const http = require('http');
const server = http.createServer((req,res) => {
  switch (req.method) {
    case 'GET' :
      break;
    case 'POST' : 
       let buffer = Buffer.from([]);
       req.on('data',(chunk) => {
          buffer = Buffer.concat([buffer,chunk]);
       });

       req.on('end',() => {
          const data = JSON.parse(buffer.toString());
          console.log("Data received : ",data);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('POST request received and processed.');
       })
  }
});

server.listen(8080,()=>{
  console.log("Server started running !!");
})