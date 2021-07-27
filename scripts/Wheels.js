import { getWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let html = "<ul>"
        
    for (const wheelset of wheels){
        html += `<li id="interior--${wheelset.id}">
        <input type="radio" name="wheels" value="${wheelset.style}" />
        ${wheelset.style}
        </li>`
    }

    html += "</ul>"

    return html
}