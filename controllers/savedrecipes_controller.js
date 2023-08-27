//for saved recipes
const database = require("../database/database")


let recipesliked_Controller = {


    renderSavedRecipes: function(req, res) {
        database.getRecipe((err, recipes) => {
            if(err){
                console.log(err)
                return
            }
            console.log("IN HERE")
            console.log(recipes)
        })
        res.render('savedrecipes', {layout: false})
    }
}

module.exports = recipesliked_Controller;