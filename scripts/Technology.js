import { getTechnology } from "./database.js";

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "technology"){
            window.alert(`You chose the ${event.target.value}!`)
        }
    }
)

export const Technology = () => {
    let html = "<ul>"
        
    for (const tech of technology){
        html += `<li id="interior--${tech.id}">
        <input type="radio" name="technology" value="${tech.package}" />
        ${tech.package}
        </li>`
    }

    html += "</ul>"

    return html
}