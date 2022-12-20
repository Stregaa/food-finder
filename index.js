const express = require("express");
const ejsLayouts = require("express-ejs-layouts");

const app = express();

app.use(ejsLayouts);
app.set("view engine", "ejs");

// Default page
app.get("/", function(req, res){
    res.render("layout")
});

// Recipes list (doesn't exist yet)
app.get("/recipe", function(req, res){
    res.render("recipes")
})

// Login page (doesn't exist yet)
app.get("/login", function(req, res){
    res.render("login")
})

// localhost:8080
app.listen(8080);
