const http = require('http');
const simpleServer = http.createServer((req,res)=>{
    console.log("server started running !!");
    console.log(req.method);
    switch(req.url) {
        case "/" :
            res.writeHead(200);
            res.end("Hello from the server !!");
            break;
        case "/games" :
            res.writeHead(200);
            res.end("User requested for games !!");
    }
});
simpleServer.listen(8080);