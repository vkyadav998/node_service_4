/**
 * Created by pc on 15-05-2016.
 */
//get data and post data -simple in query-params and body 

var express =require("express");
var bodyParser= require("body-parser");

var app=new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/vk",function (req,res) {
    var name=req.query.name;
    var place=req.query.place;
    res.send("hellow mr. "+ name +" whats'up?"+" R U visited to :"+place);
});

app.post("/vk",function (req,res) {
    var name=req.body.name;
    var place=req.body.place;
    res.send("hellow mr. "+ name +" whats'up?"+" R U visited to :"+place);
});

app.listen(3004,function (req,res) {
    console.log("server 4 is started here");
})