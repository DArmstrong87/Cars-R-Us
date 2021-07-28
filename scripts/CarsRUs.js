import { addCustomOrder } from "./database.js"
import { Interiors } from "./Interior.js"
import { Paint } from "./Paints.js"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels.js"

document.addEventListener("click", event=> {
    if(event.target.id === "orderButton"){
        addCustomOrder()
    }
})

export const carsRUs = () => {
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
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders"></article>
        <h2>Custom Car Order</h2>
        
    `
}