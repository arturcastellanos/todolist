const express = require("express");
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();

var items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleString('en-GB', options)  

    res.render('list', { 
        title: 'Lol', 
        day,
        newListItems: items,
    });
    
});

app.post('/', (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});