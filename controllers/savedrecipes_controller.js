//for saved recipes
const database = require("../database/database")

let recipesliked_Controller = {

    renderSavedRecipes: function(req, res) {
        database.getRecipe((err, recipes) => {
            if(err){
                console.log(err)
                return
            }
            // console.log(typeof recipes)
            // console.log(recipes)
                      
            res.render('savedrecipes', {
                layout: false,
                recipes: recipes
            })
        })
    },

    // renderDelete: function(req, res){

    // }

}

module.exports = recipesliked_Controller;