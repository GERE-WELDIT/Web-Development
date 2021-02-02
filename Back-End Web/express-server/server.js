//creating a web server using express
const express = require('express'); 
const app = express();
// get request nd response

// this get is a root of the webpage
app.get("/",function(request,response){
	//console.log(request);

	response.send("Hello there,this is the root of a webpage.");

});

// contact page route
app.get('/contact',function(req,res){
	res.send('<p>123@gail.com </p>');
});

app.get('/about',function(req,res){
	res.send('<p> I\'m Gere, a new full-stack web developer.</p>')
});

app.get('/index',function(req,res){
	res.send('<p> Hey there,this is an index page.</p>')
});



// the server app listen an http  request to port 3000
app.listen(3000,function(){console.log("server started listening on port 3000");});

