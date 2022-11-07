const express = require("express");
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
app.set("view engine", "ejs");

app.get('/', (req, res) => {

    var dateObj = new Date();
    var today = dateObj.toLocaleString('en-GB', { weekday: 'long'})
    var currentDay = dateObj.getDay();
    if (currentDay === 6 || currentDay === 0) {
        var isweekend = "weekend"
    } else {
        var isweekend = "not a weekend"
    }

    res.render('list', { title: 'Lol', today, isweekend })
    
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});