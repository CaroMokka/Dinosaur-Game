const dinosaurElem = document.querySelector("[data-dinosaur]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.11;
const DINOSAUR_FRAME_COUNT = 2;
const FRAME_TIME = 100;


let isJumping;
let dinosaurFrame;
let currentFrameTime;
export function setupDinosaur() {
    isJumping = false;
    dinosaurFrame = 0;
    currentFrameTime = 0;
}

export function updateDinosaur(delta, speedScale) {

    handleRun(delta, speedScale);
    handleJump();
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

function handleJump() {

}