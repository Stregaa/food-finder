const dotenv = require('dotenv');
const homepage_controller = require('./homepage_controller');
const database = require("../database/database")
dotenv.config();


let recipes_controller = { 
    // uses SerpAPI to search google for recipe links
    renderRecipes: async function(req, res) {
        //seems to need the layout: false part, without it, it will reference layout.ejs for some reason.
        const SerpApi = require('google-search-results-nodejs');
        const search = new SerpApi.GoogleSearch(process.env.API_KEY); // API key in .env

        let food_item = req.params.food_name;
        let search_term = food_item+" recipes"
        console.log(search_term)
        //what's searched will need to be the item swiped on.
        
        
        search.json({
            q: search_term, 
            location: "Canada"
        }, (result => {
            // console.log(result.recipes_results)
            recipes = []
            for (x in result.recipes_results) {
                recipes.push(
                    {
                        title: result.recipes_results[x].title,
                        link: result.recipes_results[x].link,
                        source: result.recipes_results[x].source,
                        thumbnail: result.recipes_results[x].thumbnail
                    }
                )
            }
            console.log(recipes)
            database.createRecipe(search_term, recipes[0], recipes[1], recipes[2])
            res.render('recipes', {
                layout: false,
                recipes: recipes
            });
        }))
    }
}


module.exports = recipes_controller;