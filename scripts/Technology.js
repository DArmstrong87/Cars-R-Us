import { getOrderBuilder, getTechnology, setTech } from "./dataAccess.js";
import { renderAllHTML } from "./main.js";

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTech(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Technology = () => {
    const orderBuilder = getOrderBuilder()
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