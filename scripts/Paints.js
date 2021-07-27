import { getpaintColors } from "./database.js";

const paintColors = getpaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            window.alert(`You chose the color ${event.target.value}!`)
        }
    }
)

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