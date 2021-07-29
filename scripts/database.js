const database = {
    paintColors: [
        {id: 1,
        color: "Silver",
        price: 200},
        {id: 2,
        color: "Midnight Blue",
        price: 250},
        {id: 3,
        color: "Firebrick Red",
        price: 200},
        {id: 4,
        color: "Spring Green",
        price: 210}
    ],

    interiors: [
        {id: 1,
        upholstery: "Beige Fabric",
        price: 100},
        {id: 2,
        upholstery: "Charcoal Fabric",
        price: 150},
        {id: 3,
        upholstery: "White Leather",
        price: 300},
        {id: 4,
        upholstery: "Black Leather",
        price: 400}
    ],

    technology: [
        {id: 1,
        package: "Basic Package (basic sound system)",
        price: 250},
        {id: 2,
        package: "Navigation Package (includes integrated navigation controls)",
        price: 350},
        {id: 3,
        package: "Visibility Package (includes side and reat cameras)",
        price: 650},
        {id: 4,
        package: "Navigation Package (includes integrated navigation controls)",
        price: 1000}
    ],

    wheels: [
        {id: 1,
        style: "17-inch Pair Radial",
        price: 650},
        {id: 2,
        style: "17-inch Pair Radial Black",
        price: 850},
        {id: 3,
        style: "18-inch Pair Spoke Silver",
        price: 1050},
        {id: 4,
        style: "18-inch Pair Spoke Black",
        price: 1250}
    ],
    vehicleTypes: [
        {
            id: 1,
            type: "Car",
            priceModifer: 1
        },
        {
            id: 2,
            type: "SUV",
            priceModifer: 1.5
        },
        {
            id: 3,
            type: "Truck",
            priceModifer: 2.25
        }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            techId: 1,
            wheelsId: 1,
            timestamp: Date.now()
        }
    ],
    orderBuilder: {

    }
}

export const getpaintColors = () => {
    return database.paintColors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const getVehicleTypes = () =>{
    return database.vehicleTypes.map(type => ({...type}))
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

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)

    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}