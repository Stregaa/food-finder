let food_image = document.getElementById("swiped_image");
let food_item = document.getElementById("food_item").textContent
let food_name = food_item.trim()
let mc = new Hammer(food_image);

//for swipe left functionality (refreshes main page)
mc.on("panleft", function(ev){ 
    if(ev.isFinal){
        console.log("swiped left")
        console.log(food_name)
        location.replace("http://localhost:8080")
    }
})

//for swipe right functionality (sends to recipes/food_name)
mc.on("panright", function(ev){
    if(ev.isFinal){
        console.log("swiped right (for recipes?)")
        console.log(food_name)
        location.replace("http://localhost:8080/recipes/"+food_name)
    }
})
