import { carsRUs } from "./CarsRUs.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

