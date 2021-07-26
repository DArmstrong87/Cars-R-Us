import { Interiors } from "./Interior.js"

export const carsRUs = () => {
    return `
    <article class="choose_options">
        <section class="choose_paint">
            <h2>Paint</h2>
        </section>
        <section class="choose_interior">
            <h2>Interior</h2>
            ${Interiors()}
        </section>
        <section class="choose_tech">
            <h2>Technology</h2>
        </section>
        <section class="choose_wheels">
            <h2>Wheels</h2>
        </section>
    
    </article>

    <article class="orderButton">
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders></article>
    `
}