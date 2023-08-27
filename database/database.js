const recipes_controller = require("../controllers/recipes_controller")



const mysql = require("mysql");
const e = require("express");

var connection = mysql.createConnection({
    host    : process.env.MYSQL_HOST || "127.0.0.1",
    user    : process.env.MYSQL_USER || "root",
    password    : process.env.MYSQL_PASSWORD || "",
    database    : process.env.MYSQL_DATABASE || "foodfinder"
     
})

connection.connect();

const createRecipe = (recipe_name, recipe_one, recipe_two, recipe_three) => {
    console.log("IN HERE" +recipe_name, recipe_one, recipe_two, recipe_three,)
    const query = `
        INSERT INTO recipes (recipe_name, recipe_one, recipe_two, recipe_three, image_one, image_two, image_three, title_one, title_two, title_three)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    const data = [recipe_name, recipe_one.link, recipe_two.link, recipe_three.link, recipe_one.thumbnail, recipe_two.thumbnail, recipe_three.thumbnail, recipe_one.title, recipe_two.title, recipe_three.title]
    connection.query(query, data ,function(err, res) {
        if (err){
            console.log(err)
        }

    });

}



exports.createRecipe = createRecipe;

const getRecipe = (callback) => {
    const query = `
        SELECT * FROM recipes
    `
    connection.query(query, (err, res) => {
        if(err){
            callback(err)
        }else{
            callback(null, res)

        }
    })
}

exports.getRecipe = getRecipe;
