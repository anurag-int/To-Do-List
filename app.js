const express = require("express");
let ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();


var items = [];


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));

app.post("/", function(req, res){
    var item = req.body.newItem;

    items.push(item);
    
    res.redirect("/");
});

const d = new Date();
let year = d.getFullYear();

app.get("/", (req, res)=>{
    
    var today = new Date();
    
   
    var dateDescription = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US", dateDescription);
    
    res.render("list", {listTitle : day, newListItem: items});

});

app.listen(3000, ()=>{
    console.log("Sever started on Port 3000");
});
