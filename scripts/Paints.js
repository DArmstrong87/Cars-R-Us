import { getOrderBuilder, getpaintColors, setColor } from "./dataAccess.js";
import { renderAllHTML } from "./main.js";

const paintColors = getpaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setColor(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Paint = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    for (const color of paintColors) {
        if (color.id === orderBuilder.colorId) {
            html += `<li>
            <input type="radio" name="paint" value="${color.id}" checked/>
            ${color.color}
            </li>`
        } else {
            html += `<li>
            <input type="radio" name="paint" value="${color.id}" />
            ${color.color}
            </li>`
        }
    }

    html += "</ul>"

    return html
}