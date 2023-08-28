const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const homepageController = require('./controllers/homepage_controller');
const recipes_controller = require("./controllers/recipes_controller")
const savedrecipes_controller = require("./controllers/savedrecipes_controller")
const deleterecipes_controller = require("./controllers/deleterecipes_controller")
const path = require("path")

const app = express();
const port = 8080;

app.use(ejsLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", homepageController.renderPage);

app.get("/saved_recipes", savedrecipes_controller.renderSavedRecipes);

app.post("/recipes/delete/:id", deleterecipes_controller.renderDeleteRecipes)

// Default page
// app.get("/", function(req, res){

//     res.render("layout")
// });

// Recipes list
app.get("/recipes/:food_name", recipes_controller.renderRecipes);

// app.get("/saved_recipes", recipesliked_controller.renderSavedRecipes);

// app.post("/deleted", recipes_controller)


// Login page (doesn't exist yet)
app.get("/login", function(req, res){
    res.render("recipes")
})

// localhost:8080
console.log(`Listening on ${port} 🍖`)
app.listen(port);
