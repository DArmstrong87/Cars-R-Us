import { getOrders } from "./database";

const orders = getOrders()

// const buildOrderList = () => {

// }

export const Orders = () => {
    let html = "<ul>"
    html += `<li>${order}</li>`
    html += "</ul>"
    
    return html
}