import { getOrderBuilder, getWheels, setWheels } from "./database.js";
import { renderAllHTML } from "./main.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Wheels = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    for (const wheelset of wheels) {
        if (wheelset.id === orderBuilder.wheelsId) {
            html += `<li>
            <input type="radio" name="wheels" value="${wheelset.id}" checked/>
            ${wheelset.style}</li>`
        } else {
            html += `<li>
            <input type="radio" name="wheels" value="${wheelset.id}"/>
            ${wheelset.style}</li>`
        }
    }

    html += "</ul>"

    return html
}