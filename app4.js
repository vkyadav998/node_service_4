/**
 * Created by pc on 15-05-2016.
 */

//sent data in body and get response via get and post method

var express =require("express");
var bodyParser= require("body-parser");

var app=new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/postjs",function (req,res) {
    var reqjson = req.body;
    res.json(reqjson);
});

app.get("/getjs",function (req,res) {

    var reqjson={"name":req.query.name,
                 "place":req.query.place}
    res.json(reqjson);
});

app.listen(3007,function () {
    console.log("server 7 started");
});
