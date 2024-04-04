import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

const SPEED = .05
const groundElemts = document.querySelectorAll("[data-ground]");
console.log(groundElemts);

export function setupGround() {
    setCustomProperty(groundElemts[0], "--left", 0);
    setCustomProperty(groundElemts[1], "--left", 300);
}

export function updateGround(delta, speedScale) {
    groundElemts.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if(getCustomProperty(ground, "--left") <= -300){
            incrementCustomProperty(ground, "--left", 600);
        }
    })
}