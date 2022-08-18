import getElement from "./getElements.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({drinks})=>{
    const cocktail = getElement(".cocktail");
    const title = getElement(".title")
    
    if(!drinks){
        hideLoading();
        title.textContent = `Sorry, no drinks matched your search`
        cocktail.innerHTML = null
        return;
    } 
    
    const newDrinks = drinks.map((drink)=>{
        const {idDrink: id, strDrinkThumb: image , strDrink: name} = drink;
        
        return `
            <div class="single"  data-id="${id}">
                <img src="${image}" alt="cocktail">
                    <div class="overlay">
                    <h3>"${name}"</h3>
                </div>
            </div>
    `
        }).join("");
        hideLoading();
        cocktail.innerHTML = newDrinks;
        title.innerHTML = "";
    return cocktail;
}

export default displayDrinks