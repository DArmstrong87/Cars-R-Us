import { getInteriors, getOrderBuilder, setInterior } from "./database.js";
import { renderAllHTML } from "./main.js";

const interiors = getInteriors()
const orderBuilder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            renderAllHTML()
            console.log("State of data has changed. Regenerating HTML...")
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    for (const style of interiors) {
        if (style.id === orderBuilder.interiorId) {
            html += `<li>
            <input type="radio" name="interior" value="${style.id}" checked/>
            ${style.upholstery}
            </li>`
        } else {
            html += `<li>
            <input type="radio" name="interior" value="${style.id}"/>
            ${style.upholstery}
            </li>`
        }
    }

    html += "</ul>"

    return html
}