/*====================================================
http hardcoding server.

const http = require("http");
const app = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});

    if(req.url === "/"){
        res.end("여기는 루트 입니다.");
    }else if(req.url === "/login"){
        res.end("login page");
    }
});

app.listen(3001,() => {
    console.log("http로 가동한 서버입니다.");
});

====================================================*/



/*====================================================
express 모듈을 이용한 서버 가동
====================================================*/


//module
const express = require("express");
const app = express();
const bodyParser = require("body-parser");



//app setting
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); //한글, 공백 처리 해결

//routing
const home = require("./src/routes/home");

 //middle ware method
app.use("/",home);




module.exports = app;