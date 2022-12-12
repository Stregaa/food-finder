const express = require("express");
const ejsLayouts = require("express-ejs-layouts");

const app = express();

app.use(ejsLayouts);
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("default page, maybe login?")
});

app.get("/recipe", function(req, res){
    res.render("layout")
})

//localhost:8080
app.listen(8080);

