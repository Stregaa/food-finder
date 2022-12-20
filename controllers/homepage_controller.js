const { default: axios } = require("axios");

const dotenv = require('dotenv');
dotenv.config();

let homepage_controller = {

    renderPage: function(req, res){
        
        axios.get("https://themealdb.com/api/json/v1/1/random.php", {
            // this returns what encodings we want.. without this line of code below the HTTPs request will
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        })
            .then(resp => {
                mealName = resp.data.meals[0].strMeal
                mealImage = resp.data.meals[0].strMealThumb
                ing1 = resp.data.meals[0].strIngredient1
                ing2 = resp.data.meals[0].strIngredient2
                ing3 = resp.data.meals[0].strIngredient3
                ing4 = resp.data.meals[0].strIngredient4
                ing5 = resp.data.meals[0].strIngredient5

                console.log(mealName)
                res.render('layout', {
                    food_image: mealImage,
                    food_name: mealName,
                    ing1: ing1,
                    ing2: ing2,
                    ing3: ing3,
                    ing4: ing4,
                    ing5: ing5,
                })
            })
            .catch(err => console.log(err))

        // uses SerpAPI to search google for recipe links
        const SerpApi = require('google-search-results-nodejs');
        const search = new SerpApi.GoogleSearch(process.env.API_KEY); // API key in .env

        // search.json({
        //     q: "Korean Fried Chicken", 
        //     location: "Canada"
        // }, (result => {
        //     let food_image = result["organic_results"][0]["thumbnail"]
        //     console.log(typeof(food_image))
        //     res.render('layout', {
        //         food_image: food_image
        //     });
        // }))

    },

}

module.exports = homepage_controller;