//delete recipes
const database = require("../database/database")

let deleterecipes_Controller = {

    renderDeleteRecipes: function(req, res) {
        console.log(req.params.id)
        id = req.params.id
        database.deleteRecipe((err) => {
            if(err){
                console.log(err)
                return
            }
            database.getRecipe((err, recipes) => {
                if(err){
                    console.log(err)
                    return
                }
                res.render('savedrecipes', {
                    layout: false,
                    recipes: recipes
                })
            })
        })
    },
    
}

module.exports = deleterecipes_Controller;