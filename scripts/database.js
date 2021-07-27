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
        {id: 1,
        style: "18-inch Pair Spoke Silver",
        price: 1050},
        {id: 1,
        style: "18-inch Pair Spoke Black",
        price: 1250}
    ],
    customOrder: [
        {
        }
    ]
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
    return database.wheels.map(wheelset => ({...wheelset}))
}

export const setColor = (id) => {
    database.customOrder.colorId = id
}
export const setInterior = (id) => {
    database.customOrder.interiorId = id
}
export const setTech = (id) => {
    database.customOrder.techId = id
}
export const setWheels = (id) => {
    database.customOrder.wheelsId = id
}