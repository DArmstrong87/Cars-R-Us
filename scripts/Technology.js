import { getTechnology } from "./database.js";

const technology = getTechnology()

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