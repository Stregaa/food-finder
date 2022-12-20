const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const homepageController = require('./controllers/homepage_controller');

const app = express();
const port = 8080

app.use(ejsLayouts);
app.set("view engine", "ejs");

app.get("/", homepageController.renderPage)

// Default page
// app.get("/", function(req, res){

//     res.render("layout")
// });

// Recipes list (doesn't exist yet)
app.get("/recipe", function(req, res){
    res.render("recipes")
})

// Login page (doesn't exist yet)
app.get("/login", function(req, res){
    res.render("login")
})

// localhost:8080
console.log(`Listening on ${port} 🍖`)
app.listen(port);
