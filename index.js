var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
var authenticateController=require('./controller/authenticate-controller');
var registerController=require('./controller/register-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get("/login.html",function(req,res)
{
    res.sendFile(path.join(__dirname+'/login.html'));
})
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
console.log(authenticateController);
app.post('controller/register-controller',registerController.register);
app.post('controller/authenticate-controller',authenticateController.authenticate);
app.listen(1000);
console.log("SERVER IS LISTENING TO PORT NO:1000");
