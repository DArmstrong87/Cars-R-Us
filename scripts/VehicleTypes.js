import { getOrderBuilder, getVehicleTypes, setVehicleType } from "./database.js";
import { renderAllHTML } from "./main.js";


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setVehicleType(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const VehicleTypes = () => {
    const orderBuilder = getOrderBuilder()
    const types = getVehicleTypes()
    let html = `<ul>`

    const listTypes = types.map(type => {
        if (type.id === orderBuilder.typeId) {
            return html += `<li>
                    <input type="radio" name="type" value="${type.id}" checked>
                    ${type.name}
                    </li>`
        } else {
            return html += `<li>
                    <input type="radio" name="type" value="${type.id}">
                    ${type.name}
                    </li>`
        }
    }
    ).join("")

    html += `</ul>`
    return html
}