var Web3 = require("web3");
var contract = require("truffle-contract");
var jsonfile = require("jsonfile");
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

web3.eth.getCoinbase(function(address){
    //.then((address) => {
    coinbase = address
    console.log("coinbase address is :",address);
})
console.log("coinbase address is :",web3.eth.coinbase)
var json = jsonfile.readFileSync("./build/contracts/Kyc.json");
var KycContract = contract(json);
KycContract.setProvider(web3.currentProvider);



async function createAccount(password,cb){
        console.log("create new account")
        let newAccountOP = await web3.personal.newAccount(password);
        cb(null,newAccountOP);
}


async function setUser(email,result,fName,lName,status,password,cb){
    console.log("set user call")
    let instance = await KycContract.deployed();
    let isUnlocked = await web3.personal.unlockAccount(result, password) 
    let setUserData = await instance.setMyUser(email,result,fName,lName,status,{from: web3.eth.coinbase,gas: 300000})
    console.log("setuser data: ",setUserData)
    cb(null,setUserData);
}

async function getMyUser(userName,cb){
    let instance = await KycContract.deployed();
    let user  = await instance.getMyUser(userName);
    cb(null,user);
}


module.exports = {
    getMyUser,
    setUser,
    createAccount
}