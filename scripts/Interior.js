import { getInteriors, getOrderBuilder, setInterior } from "./database.js";
import { renderAllHTML } from "./main.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Interiors = () => {
    const orderBuilder = getOrderBuilder()
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