import { database } from "./database.js"

export const getpaintColors = () => {
    return database.paintColors.map(color => ({ ...color }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({ ...tech }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}
export const getOrderBuilder = () => {
    return database.orderBuilder
}
export const getVehicleTypes = () => {
    return database.vehicleTypes.map(type => ({ ...type }))
}


export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}
export const setVehicleType = (id) => {
    database.orderBuilder.typeId = id
}

const zeroOrderBuilder = () => {
    database.orderBuilder.colorId = 0
    database.orderBuilder.interiorId = 0
    database.orderBuilder.techId = 0
    database.orderBuilder.wheelsId = 0
    database.orderBuilder.typeId = 0
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    zeroOrderBuilder()
    document.dispatchEvent(new CustomEvent("stateChanged"))
}