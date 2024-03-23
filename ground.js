import { incrementCustomProperty } from "./updateCustomProperty.js";

const SPEED = .05
const groundElemts = document.querySelector('[data-ground]');
//console.log(groundElemts);



export function updateGround(delta) {
    groundElemts.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * SPEED * -1)
    })
}