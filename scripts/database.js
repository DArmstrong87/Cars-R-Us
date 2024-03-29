export const database = {
    paintColors: [
        {
            id: 1,
            color: "Silver",
            price: 200
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 250
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 200
        },
        {
            id: 4,
            color: "Spring Green",
            price: 210
        }
    ],

    interiors: [
        {
            id: 1,
            upholstery: "Beige Fabric",
            price: 100
        },
        {
            id: 2,
            upholstery: "Charcoal Fabric",
            price: 150
        },
        {
            id: 3,
            upholstery: "White Leather",
            price: 300
        },
        {
            id: 4,
            upholstery: "Black Leather",
            price: 400
        }
    ],

    technology: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 250
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 350
        },
        {
            id: 3,
            package: "Visibility Package (includes side and reat cameras)",
            price: 650
        },
        {
            id: 4,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 1000
        }
    ],

    wheels: [
        {
            id: 1,
            style: "17-inch Pair Radial",
            price: 650
        },
        {
            id: 2,
            style: "17-inch Pair Radial Black",
            price: 850
        },
        {
            id: 3,
            style: "18-inch Pair Spoke Silver",
            price: 1050
        },
        {
            id: 4,
            style: "18-inch Pair Spoke Black",
            price: 1250
        }
    ],
    vehicleTypes: [
        {
            id: 1,
            name: "Car",
            priceModifier: 1
        },
        {
            id: 2,
            name: "SUV",
            priceModifier: 1.5
        },
        {
            id: 3,
            name: "Truck",
            priceModifier: 2.25
        }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            techId: 1,
            wheelsId: 1,
            typeId: 1,
            timestamp: Date.now()
        }
    ],
    orderBuilder: {
        colorId: 0,
        interiorId: 0,
        techId: 0,
        wheelsId: 0,
        typeId: 0
    }
}