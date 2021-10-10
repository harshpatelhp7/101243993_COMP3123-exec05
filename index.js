const express = require('express');
const app = express();
const router = express.Router();
let fs = require('fs')
const path = require('path');
let user = require('./user.json')

 

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  res.sendFile(path.join('C:/Users/harsh/downloads/week05_lab_execrcise05', './home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/user',(req,res) => {
  let user_values = JSON.stringify(user) 
  res.send(`<h1>This is user.json file in json format</h1>\n ${user_values}`)
})

router.get('/profile', (req,res) => {
  res.send('This is profile router');
 
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/', (req,res) => {
  res.send('<h1>Welcome to lab 5</h1<')
})

router.get('/login', (req,res) => {
  
  let username = req.query.username_q;
  let password = req.query.password_q;

  if(user.username == username){
    if(user.password == password){
      {
        let message = "User Is valid";

        response = {
          status:true,
          message
        }

        res.send(response)
      }
    }else{
      let message = "Passord Is invalid";

      response = {
        status:false,
        message
      }

      res.send(response)
    }
  }else{
    let message = "User Name Is invalid";

    response = {
      status:false,
      message
    }

    res.send(response)
  }  


});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:unm', (req,res) => {
  let username = req.params.unm;
  
  if(username == user.username){
    res.send(`<b>${username} successfully logout.`);
  }

});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log("Server running  at http://localhost:%s", process.env.port || 8081)