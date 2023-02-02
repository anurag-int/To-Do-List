const express = require("express");
let ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

// always need to set the view engine when use ejs
app.set('view engine', 'ejs');



app.get("/", (req, res)=>{
    
    
    var today = new Date();
    var currentDay = today.getDay();

    var day = "";

    switch(currentDay)
    {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error!");
    }

    res.render("list", {typeOfDay : day});



    // if(currentDay === 0 || currentDay === 6)
    // {
    //     // day = "weekend";

    //     // res.render is used to display the dynamic data in the html.
    //     res.render("list", {typeOfDay : day});
    // }

    // else 
    // {
    //     // day = "weekday";

    //     // res.render is used to display the dynamic data in the html.
    //     res.render("list", {typeOfDay : day});
    // }
});

app.listen(3000, ()=>{
    console.log("Sever started on Port 3000");
});