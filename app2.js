/**
 * Created by pc on 15-05-2016.
 */

//dynamic get url params (request params)
//ex.  http://localhost:3005/vk/vipin/456

var express =require("express");
var bodyParser= require("body-parser");

var app=new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/vk/:name/:id",function (req,res) {
    var name =req.params.name;
    var id =req.params.id;
    res.send("hellow mr. "+ name +" whats'up?"+" Your id is :"+id);
});

app.listen(3005,function (req,res) {
    console.log("server 5 started here");
})