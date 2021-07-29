import { getVehicleTypes } from "./database.js";


const types = getVehicleTypes()

export const vehicleTypes = () => {
    let html = `<ul>`

    const typesList = types.map(type => 
        {
            html += `<li></li>`
        }
    )

    html += `</ul>`
}