let food_image = document.getElementById("swiped_image");
let food_name = document.getElementById("food_item").textContent
let mc = new Hammer(food_image);


//for swipe left functionality (refreshes main page)
mc.on("panleft", function(ev){ 
    if(ev.isFinal){
        console.log("swiped left")
        location.replace("http://localhost:8080")
        console.log(food_name)
    }
})

//for swipe right functionality (sends to recipes/food_name)
mc.on("panright", function(ev){
    if(ev.isFinal){
        console.log("swiped right (for recipes?)")
        location.replace("http://localhost:8080/recipes/"+food_name)
    }
})
