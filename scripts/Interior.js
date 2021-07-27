import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener (
    "change",
    (event) => {
        if(event.target.name === "interior"){
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"
        
    for (const style of interiors){
        html += `<li id="interior--${style.id}">
        <input type="radio" name="interior" value="${style.id}" />
        ${style.upholstery}
        </li>`
    }

    html += "</ul>"

    return html
}