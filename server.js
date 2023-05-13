const path = require('path')
const http = require('http');
const fs = require('fs');
const pathToScript = path.join(__dirname,'static','script.js');
const pathToStyle= path.join(__dirname,'static','style.css');
const pathToIndex = path.join(__dirname,'static','index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);
const scriptHtmlFile = fs.readFileSync(pathToScript);
const styleHtmlFile = fs.readFileSync(pathToStyle);



const server = http.createServer((req, res)=>{
    if(req.url ==="/" && req.method=== "GET"){
      res.writeHead(200, {"Content-type": "text/html"});
      res.end(indexHtmlFile)
 } 
 else if(req.url ==="/style.css" && req.method=== "GET"){
    res.writeHead(200, {"Content-type": "text/css"});
    res.end(styleHtmlFile)
 }
 else if(req.url ==="/script.js" && req.method=== "GET"){
    res.writeHead(200, {"Content-type": "text/js"});
    res.end(scriptHtmlFile)
 }
 else{
    res.writeHead(404);
    res.end();
 }

    
});

server.listen(3000);