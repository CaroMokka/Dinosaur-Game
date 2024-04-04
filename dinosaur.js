import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

const dinosaurElem = document.querySelector("[data-dinosaur]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINOSAUR_FRAME_COUNT = 2;
const FRAME_TIME = 100;


let isJumping;
let dinosaurFrame;
let currentFrameTime;
let yVelocity
export function setupDinosaur() {
    isJumping = false;
    dinosaurFrame = 0;
    currentFrameTime = 0;
    yVelocity = 0;
    setCustomProperty(dinosaurElem, "--bottom", 0);
    document.removeEventListener("keydown", onJump);
    document.addEventListener("keydown", onJump);
}

export function updateDinosaur(delta, speedScale) {

    handleRun(delta, speedScale);
    handleJump(delta);
}
export function getDinosaurRect() {
    return dinosaurElem.getBoundingClientRect();
}

export function setDinosaurLose() {
    dinosaurElem.src = "./assets/dino-lose.png"
}

function handleRun(delta, speedScale) {
    if(isJumping){
        dinosaurElem.src = `./assets/dino-stationary.png`
        return
    }

    if(currentFrameTime >= FRAME_TIME) {
        dinosaurFrame = (dinosaurFrame + 1) % DINOSAUR_FRAME_COUNT;
        console.log(dinosaurFrame);
        dinosaurElem.src = `./assets/dino-run-${dinosaurFrame}.png`
        currentFrameTime -= FRAME_TIME
    }

    currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
    if(!isJumping) return
    incrementCustomProperty(dinosaurElem, "--bottom", yVelocity * delta)

    if(getCustomProperty(dinosaurElem, "--bottom") <= 0) {
        setCustomProperty(dinosaurElem, "--botom", 0)
        isJumping = false
    }

    yVelocity -= GRAVITY * delta;

}

function onJump (e) {
    if(e.code !== "Space" || isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true

}
