//function to fetch the drinks and display them
import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

 const presentDrinks = async (url) =>{
    //fetch drinks
    const drinks = await fetchDrinks(url)
    console.log(drinks);
    //display drinks
    //our display drinks section will return a section
    const section = await displayDrinks(drinks)

    if(section){
        setDrink(section)
    }
}

export default presentDrinks;