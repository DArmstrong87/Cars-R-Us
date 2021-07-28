import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener (
    "change",
    (event) => {
        if(event.target.name === "wheels"){
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"
        
    for (const wheelset of wheels){
        html += `<li>
        <input type="radio" name="wheels" value="${wheelset.id}" />
        ${wheelset.style}
        </li>`
    }

    html += "</ul>"

    return html
}