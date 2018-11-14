var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var friends=["Mateusz","Ann","Vika","Andrey"];

app.get("/",function(req,res){
    res.render("home");
});

app.get("/friends",function (req,res) {
    res.render("friends",{friends:friends});
});

app.post("/addFriend",function(req,res){
   friends.push(req.body.newFriend);
   res.redirect("/friends"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started!");
});