var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is started!");
})