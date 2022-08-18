import fetchDrinks from "./utils/fetchDrinks.js";
import displaySingleDrinks from "./utils/displaySingleDrink.js";


const singleDrink = async ()=>{
    const id = localStorage.getItem("drink")

    if(!id){
        window.location.replace("index.html")
    }
    else{
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displaySingleDrinks(drink)
    }
}

window.addEventListener("DOMContentLoaded", singleDrink)

