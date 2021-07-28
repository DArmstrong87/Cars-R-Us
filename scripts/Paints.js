import { getpaintColors, setColor } from "./database.js";

const paintColors = getpaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Paint = () => {
    let html = "<ul>"
        
    for (const color of paintColors){
        html += `<li>
        <input type="radio" name="paint" value="${color.id}" />
        ${color.color}
        </li>`
    }

    html += "</ul>"

    return html
}