import { getpaintColors } from "./database.js";

const paintColors = getpaintColors()

export const Paint = () => {
    let html = "<ul>"
        
    for (const color of paintColors){
        html += `<li id="interior--${color.id}">
        <input type="radio" name="paint" value="${color.color}" />
        ${color.color}
        </li>`
    }

    html += "</ul>"

    return html
}