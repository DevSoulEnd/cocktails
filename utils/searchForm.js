import getElement from "./getElements.js";
import presentDrinks from "./presentDrinks.js";

const searchForm = getElement(".search-form");
const input = getElement(".search")
const baseURL = "https://thecocktaildb.com/api/json/v1/1/search.php?s="

searchForm.addEventListener("keyup", ()=>{
    const value = input.value;
    if(!value) return;

    presentDrinks(`${baseURL}${value}`);
})