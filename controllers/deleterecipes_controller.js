//delete recipes
const database = require("../database/database")

let deleterecipes_Controller = {

    renderDeleteRecipes: function(req, res) {
        console.log("hdshsdhsdghasdfhadf")
        database.deleteRecipe((err, recipes) => {
            if(err){
                console.log(err)
                return
            }
            console.log(req.params.id)
                      
            res.render('savedrecipes', {
                layout: false,
                recipes: recipes
            })
        })
    },
    
    // renderDelete: function(req, res){

    // }

}

module.exports = deleterecipes_Controller;