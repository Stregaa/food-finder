const { default: axios } = require("axios");

const dotenv = require('dotenv');
dotenv.config();


let homepage_controller = {
    
    renderPage: async function(req, res, next){
        
        await axios.get("https://themealdb.com/api/json/v1/1/random.php", {
            // this returns what encodings we want.. without this line of code below the HTTPs request will
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        })
            .then(resp => {
                mealImage = resp.data.meals[0].strMealThumb
                mealName = resp.data.meals[0].strMeal
                // console.log(mealName)
                totalIngredients = []
                totalIngredients.push(
                    resp.data.meals[0].strIngredient1,
                    resp.data.meals[0].strIngredient2,
                    resp.data.meals[0].strIngredient3,
                    resp.data.meals[0].strIngredient4,
                    resp.data.meals[0].strIngredient5,
                    resp.data.meals[0].strIngredient6,
                    resp.data.meals[0].strIngredient7,
                    resp.data.meals[0].strIngredient8,
                    resp.data.meals[0].strIngredient9,
                    resp.data.meals[0].strIngredient10
                )
                // console.log(totalIngredients)
                ingredients = []
                for (x in totalIngredients) {
                    if (totalIngredients[x] != ''){
                        ingredients.push(totalIngredients[x])
                    }
                }
                res.render('layout', {
                    food_image: mealImage,
                    food_name: mealName,
                    ingredients: ingredients,
                })
            })
            .catch(err => console.log(err))
    },

}

module.exports = homepage_controller;