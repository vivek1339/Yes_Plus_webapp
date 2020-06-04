const express=require('express');
const http=require('http');


const hostname='localhost';
const port=3000;

const app= express();

const path=require('path');


app.use(express.static(path.join(__dirname, 'src/css')));
app.use(express.static(path.join(__dirname, 'src/js')));
app.use(express.static(path.join(__dirname, 'src/animations')));
app.use(express.static(path.join(__dirname, 'res/')));


//app.use(express.static(path.join(__dirname+'src/html')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/home.html')); 
    console.log('got req form(get) '+req.url);
});       
app.get('/register.html',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/register.html')); 
});

app.get('/about_us.html',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/about_us.html')); 
});
app.get('/home.html',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/home.html')); 
    console.log('got req form(get) '+req.url);
});
app.get('/login.html',function(req,res){
    res.sendFile(path.join(__dirname+'/src/html/login.html')); 
    console.log('got req form(get) '+req.url);
});



app.use((req,res,next)=>{
	console.log('got req for '+req.url); 
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express server</h1></body</html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});