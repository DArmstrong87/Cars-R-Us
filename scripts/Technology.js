import { getOrderBuilder, getTechnology, setTech } from "./database.js";
import { renderAllHTML } from "./main.js";

const technology = getTechnology()
const orderBuilder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTech(parseInt(event.target.value))
            renderAllHTML()
            console.log("State of data has changed. Regenerating HTML...")
        }
    }
)

export const Technology = () => {
    let html = "<ul>"

    for (const tech of technology) {
        if (tech.id === orderBuilder.techId) {
            html += `<li>
            <input type="radio" name="technology" value="${tech.id}" checked/>
            ${tech.package}
            </li>`
        } else {
            html += `<li>
            <input type="radio" name="technology" value="${tech.id}" />
            ${tech.package}
            </li>`
        }
    }

    html += "</ul>"

    return html
}