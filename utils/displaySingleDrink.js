import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElements.js";

const displaySingleDrinks = (data) =>{
    hideLoading();
    const drink = data.drinks[0] 
    console.log(drink);

    const {strDrink:name, strDrinkThumb: image, strInstructions: desc } = drink
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    const img = getElement(".image");
    const title = getElement(".title");
    const instruction = getElement(".instruction");
    const value = getElement(".value");

    img.src = image;
    title.textContent = name;
    document.title = name;
    instruction.textContent  = desc;
    value.innerHTML = list.map((item)=>{
        if(!item) return;
        return `<li> <i class = "fas fa-check"></i>${item} </li>`
    }).join("")

}

export default displaySingleDrinks;