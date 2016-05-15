/**
 * Created by pc on 15-05-2016.
 */

//access header in response

var express =require("express");
var bodyParser= require("body-parser");

var app=new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/vk",function (req,res) {
    var reqjson={"host":req.headers.host}
    res.json(reqjson);
});

app.listen(3008,function () {
    console.log("server 7 started");
})
