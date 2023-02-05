const express = require("express");
let ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

// array that is used to store the todo list items
var items = [];

// always need to set the view engine when use ejs
app.set('view engine', 'ejs');

// always need to write when we use the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// it is to make use public as a static resource
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
    
    // to get date in (September 13, 2022) this format
    var dateDescription = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    // to get date in (September 13, 2022) this format
    var day = today.toLocaleDateString("en-US", dateDescription);
    
    res.render("list", {listTitle : day, newListItem: items});

});

app.listen(3000, ()=>{
    console.log("Sever started on Port 3000");
});
