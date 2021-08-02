import { Interiors } from "./Interior.js"
import { Paint } from "./Paints.js"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder, getOrderBuilder } from "./dataAccess.js"
import { VehicleTypes } from "./VehicleTypes.js"

const orderBuilder = getOrderBuilder()

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        if (orderBuilder.interiorId === 0 || orderBuilder.colorId === 0 || orderBuilder.techId === 0 || orderBuilder.wheelsId === 0 || orderBuilder.typeId === 0) {
            window.alert('Please make all selections.')
        } else {
            addCustomOrder()
        }
    }
})

export const carsRUsHtml = () => {
    return `
    <article class="choose_options">
        <section class="choose_paint">
            <h2>Paint</h2>
            ${Paint()}
        </section>
        <section class="choose_interior">
            <h2>Interior</h2>
            ${Interiors()}
        </section>
        <section class="choose_tech">
            <h2>Technology</h2>
            ${Technology()}
        </section>
        <section class="choose_wheels">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    
    </article>

    <article class="orderButton">
        <section>
        ${VehicleTypes()}
        </section>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
    <h2>Custom Car Order</h2>
            ${Orders()}
    </article>
    `
}