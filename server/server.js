const express = require('express');
const bodyParser = require('body-parser');
const web3Methods = require('./web3Methods');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/kyc/info',function(req,res,next){
    console.log("Post call",req.body);
    web3Methods.createAccount(req.body.password,function(err,result){
        console.log("====",err,result);
        if(err){
            res.send(err);
        }
        else{
            console.log("Here...",result);
            let email = req.body.email;
            let name = req.body.fName;
            let password = req.body.password;
            let lName = req.body.lName;
            web3Methods.setUser(email,result,name,lName,req.body.status,req.body.password,function(err,result){
                if(err){
                    res.send(err);
                }
                else{
                    res.send("User updated successfully");
                }
            })
        }
    })
})
.get('/kyc/info',function(req,res,next){
    web3Methods.getMyUser(req.headers.email,function(err,result){
        if(err) res.send(err);
        else res.send(result);
        
    })
})



app.listen(port);
console.log(`server listening on port ${port}`);
