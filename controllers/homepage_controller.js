const { default: axios } = require("axios");

let homepage_controller = {

    renderPage: function(req, res){

        const SerpApi = require('google-search-results-nodejs');
        const search = new SerpApi.GoogleSearch("");
        //remember to remove the API key

        //uses SerpAPI to search google for recipes
        //temporary image solution, maybe we can find a better image later.. for now we can use this for functionality?
        search.json({
            q: "Korean Fried Chicken", 
            location: "Canada"
        }, (result => {
            let food_image = result["organic_results"][0]["thumbnail"]
            console.log(typeof(food_image))
            res.render('layout', {
                food_image: food_image
            });
        }))



        
        // axios.get("https://themealdb.com/api/json/v1/1/random.php", {
        //     //this returns what encodings we want.. without this line of code below the HTTPs request willl
        //     headers: { "Accept-Encoding": "gzip,deflate,compress" } 

        // })
        //     .then(resp => console.log(resp))
        //     .catch(err => console.log(err))
        // res.render("layout")
    },
    
    

}


module.exports = homepage_controller;