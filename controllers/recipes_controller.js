const dotenv = require('dotenv');
const homepage_controller = require('./homepage_controller');
dotenv.config();



let recipes_controller = { 
    renderRecipes: async function(req, res) {


        //seems to need the layout: false part, without it, it will reference layout.ejs for some reason.
        const SerpApi = require('google-search-results-nodejs');
        const search = new SerpApi.GoogleSearch(process.env.API_KEY); // API key in .env

        let food_item = req.params.food_name;
        console.log(food_item)
        //what's searched will need to be the item swiped on.

    
        search.json({
            q: food_item, 
            location: "Canada"
        }, (result => {
            console.log(result)
            res.render('recipes', {layout: false}
            );
        }))

        //res.render("recipes", {layout: false})
    }
}

module.exports = recipes_controller;