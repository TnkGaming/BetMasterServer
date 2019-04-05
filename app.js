var fs = require('fs');
var moment = require('moment');
var express = require('express');
var http = require("http");
var DomParser = require('dom-parser');
var parser = new DomParser();
var teams = [];
var lastUpdate = moment("2018-05-10T00:00:00.000");
var dataMutex = false;
var savedData; 
var dataMine = require('./mining/dataMining');
var dataManipulator = require('./mining/dataManipulation');
var app = express();
console.log("Manipulating...");
fs.readFile('./mining/data.txt', 'utf8', function(err, data){
    savedData = data;
    teams = dataManipulator.manipulate(savedData.split("\n"));
    console.log("Done Manipulating...");
});

var dailyInfo = [];
var dailyDate = [];
function getDataForDayz(){
    if(dataMutex){
        console.log("In Progress");
        return;
    }
    dataMutex = true;
    console.log("getting data for dayz");
    var today = moment().subtract(3,'days');
    for(var i =0 ; i < 7 ; i++){
        dailyDate[i] = parseDate(today);
        getForDate(parseDate(today)) ;
        today.add(1,'days');
    }
    dataMutex = false;
}
getDataForDayz();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var count =0;
app.listen(8080);
app.get('/:date', function (req,res){
    res.send(getInfoForDate(req.params.date));
});

function getInfoForDate(date){
    console.log("getting for: "+date); 
    return dailyInfo[dailyDate.indexOf(date)];
}
function getForDate(date){
    var index = dailyDate.indexOf(date);
    http.get("http://www.soccervista.com/soccer_games.php?date="+date,(resp)=>{
        let data = '';
     
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
     
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var toSend=[];
        var document = parser.parseFromString(data);
        var dataToSave=dataMine.MineCurrent(document);
        var currentMatches = dataToSave.split("\n");
        currentMatches.forEach(function(match){dataManipulator.getOdds(match,toSend)});
        console.log("Done for: "+index+"-"+date+" "+toSend.length);
        //console.log(toSend);
        dailyInfo[index]=JSON.stringify(toSend);
      });
     
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
    
}

function update(){
    var now = moment();
    if(alreadyUpdated(now.subtract(3,'days')) || now.hour() < 5){ 
        console.log("Last updated: "+ lastUpdate._d);
        return;
    }
    console.log("Trying to update..");
    lastUpdate = moment(now);
    console.log(now._d);
    http.get("http://www.soccervista.com/soccer_games.php?date="+parseDate(now),(resp)=>{
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        var toSend=[];
        var document = parser.parseFromString(data);
        var dataToSave=dataMine.MineCurrent(document);
        console.log("Writting to file..");
        fs.appendFileSync("./mining/data.txt", "\n"+dataToSave);
        console.log("Done Writting");
        console.log("Manipulating new data");
        teams= teams.concat(dataManipulator.manipulate(dataToSave.split("\n")));
        console.log("Done Manipulating");

    });
    
    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
}
function shifting(){
    console.log("Shifting data");
    var dateToGet = parseDate(moment().add(3,'days'));
    if(dateToGet == dailyDate[dailyDate.length-1]){
        console.log("Already shifted.");
        return;
    }
    http.get("http://www.soccervista.com/soccer_games.php?date="+dateToGet,(resp)=>{
        let data = '';
     
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
     
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var toSend=[];
        var document = parser.parseFromString(data);
        var dataToSave=dataMine.MineCurrent(document);
        var currentMatches = dataToSave.split("\n");
        currentMatches.forEach(function(match){dataManipulator.getOdds(match,toSend)});
        var i=1;
        for(;i<dailyInfo.length;i++){
            dailyDate[i-1]=dailyDate[i];
            dailyInfo[i-1]=dailyInfo[i];
        }
        dailyDate[i-1]=dateToGet;
        dailyInfo[i-1]=JSON.stringify(toSend);
        console.log("Done shifting for: "+(i-1)+"-"+dateToGet+" "+toSend.length);
      });
     
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
}
function alreadyUpdated(now){
    if(now.year() <= lastUpdate.year()){
        if(now.year() < lastUpdate.year()) return true;
        if(now.month() <= lastUpdate.month()){
            if(now.month() < lastUpdate.month()) return true;
            if(now.date() <= lastUpdate.date()) return true;
        }
    }
    return false;
}
var interv = setInterval(getDataForDayz,600000);
var updateData = setInterval(update,1230000);
var shiftData = setInterval(shifting,700000);

function parseDate(date){
    return date.year()+"-"+(date.month()+1)+"-"+date.date();
}