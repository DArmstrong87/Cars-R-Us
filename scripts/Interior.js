import { getInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener (
    "change",
    (event) => {
        if(event.target.name === "interior"){
            window.alert(`You chose the ${event.target.value} interior!`)
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"
        
    for (const style of interiors){
        html += `<li id="interior--${style.id}">
        <input type="radio" name="interior" value="${style.upholstery}" />
        ${style.upholstery}
        </li>`
    }

    html += "</ul>"

    return html
}