const express = require("express");
// to parser the html data 
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){

	res.sendFile(__dirname + '/index.html');

});


app.post('/',function(req,res){

	// display the output
	var wt = req.body.weight;
	var ht = req.body.height;

	var bmiValue = parseFloat(wt) / (parseFloat(ht) * parseFloat(ht));
	res.send(`<h1>BMI is ${bmiValue.toFixed(2)} </h1>`);

});


// server listening
 app.listen(3000,function(req,res){
 	console.log('server is listening on port 3000.');
 });

 // nodemon settings:
 //1. the script inside page is modified
 //2. run npm nodemon on the terminal of the folder