

 export default function getElement(selector){
    const element = document.querySelector(selector);

    if(element) return element

    else{
        throw new Error (`can't find null selector "${selector}"`)
    }
}