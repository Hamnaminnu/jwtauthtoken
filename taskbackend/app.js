const express = require('express');
var Registerdata = require('./src/models/registerdata');
const cors = require('cors');
var bodyparser= require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());


app.post('/insert',function(req,res){
   
    console.log(req.body);
    
    var User = {       
    firstname : req.body.Registerdata.firstname,
    lastname : req.body.Registerdata.lastname,
    email: req.body.Registerdata.email,
    number: req.body.Registerdata.number,
    date: req.body.Registerdata.date,
    city: req.body.Registerdata.city,
    pincode: req.body.Registerdata.pincode,
    state: req.body.Registerdata.state,
    password: req.body.Registerdata.password
   }       
   var User = new Registerdata(User);
   User.save();
});
app.post('/usercheck',function(req,res){
   
    console.log(req.body);
    const name = req.body.usercheck.email;
    const upsw = req.body.usercheck.password;
    Registerdata.findOne({email:name,password:upsw})
    .then(usercheck=>{
        if(usercheck){
            let payload = {subject: usercheck.email + usercheck.password};
            let usertoken = jwt.sign(payload, 'secretKey') ; 
            let id = usercheck._id;
            let message = "Success";
            res.status(200).send({usertoken, id, message});
        }
        else{
            console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
    // , function(err, result) {
    //     if (result){
    //     let message="success" 
    //     res.status(200).send({message});
    //     }
    //     else {
    //         let message="fail" 
    //     res.status(200).send({message});
    //     }
    //   });
    
});

app.get("/data/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    const id2 = id.substring(1);
    // console.log(id2);
    Registerdata.findOne({_id : id2})
    .then(function(book){

        res.send(book);
        
    });

});


app.listen(3800, function(){
    console.log('listening to port 3800');
});