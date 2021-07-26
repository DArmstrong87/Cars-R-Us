import { getInteriors } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    let html = "<ul>"
        
    for (const style of interiors){
        html += `<li id="interior--${style.id}">${style.upholstery}</li>`
    }

    html += "</ul>"

    return html
}