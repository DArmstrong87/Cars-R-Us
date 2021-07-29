import { getVehicleTypes, setVehicleType } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type"){
            setVehicleType(parseInt(event.target.value))
        }
    }
)

export const VehicleTypes = () => {
    const types = getVehicleTypes()
    let html = `<ul>`

    const listTypes = types.map(type => 
            {
                html += `<li>
                <input type="radio" name="type" value="${type.id}">
                ${type.name}
                </li>`
            }
    )

    html += listTypes.join("")
    html += `</ul>`
    return html
}