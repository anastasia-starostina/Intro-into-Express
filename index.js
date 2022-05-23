//Importing the express object
const express = require("express")
//Calling it and putting imported object into the variable
const app = express()
//Assigning the port number to the variable
const port = 3000

//Function with standart parameters of request and response, 
//Parmeters are the the base url and function
//Sending response 'Hello, world'
app.get("/", function(req,res){
  const data = JSON.stringify({message: 'Hello, World!' });
  res.send(data); })
// Listening for the request with parameters of a port variable and a function
// Console logging which port the rever is listening to for other developers
app.get('/secret', function (req,res) {
    res.json ({message: 'It\'s out secret'})
})

app.listen(port, function(){
    console.log(`Example app is running on port ${port}`)
})
