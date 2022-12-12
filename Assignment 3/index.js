const http = require("http");
const fs = require("fs");

fs.writeFileSync("index.html",`<h1>Hello World</h1>
<p>This is DeepakKumar...</p>`)

const server = http.createServer((req, res)=>{

  fs.readFile("index.html", (err, data)=>{
    res.writeHead(200, {"Content-type" : "text/html"});
    res.end(data);
  })

})

server.listen (5001, ()=> console.log("The server is up at 5001"));

