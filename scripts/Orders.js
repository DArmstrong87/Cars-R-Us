import { getInteriors, getOrders, getpaintColors, getTechnology, getVehicleTypes, getWheels } from "./database.js";

const colors = getpaintColors()
const interiors = getInteriors()
const technology = getTechnology()
const wheels = getWheels()
const types = getVehicleTypes()

const buildOrderList = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = technology.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const foundVehicleType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    const totalCost = (foundColor.price + foundInterior.price + 
        foundTech.price + foundWheels.price) 
        * foundVehicleType.priceModifier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>Order #${order.id} costs ${costString}</li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderList)
    html += listItems.join("")
    html += "</ul>"
    
    return html
}