const express=require('express');
const http=require('http');


const hostname='localhost';
const port=3000;

const app= express();

const path=require('path');


//app.use(express.static(path.join(__dirname+'src/html')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/home.html')); 
});

//app.use(express.static(path.join(__dirname, '/src/css')));

app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express server</h1></body</html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});