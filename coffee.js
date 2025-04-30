let imagesTasse = ["tasse-1.png", "tasse-2.png", "tasse-3.png", "tasse-4.png", "tasse-5.png", "tasse-6.png"]; 
let imagesSmoke = ["smoke1.png", "smoke2.png", "smoke3.png", "smoke4.png"]; 
let index = 0;
let intervalId = null;
let smokeIntervalid = null;
let rectangle = document.querySelector(".rectangle");
const table = document.querySelector(".table");
const CoffeMachine = document.querySelector(".coffee-machine");
const Tasse = document.querySelector(".tasse-1")
let button = document.querySelector(".button");
let tasse = document.getElementById("tasse-1")
let smoke = document.getElementById("smoke");

let tasseReady = false;

function pressButton() {

    if (intervalId || tasseReady) return;

    rectangle.style.opacity = 1;
    
    intervalId = setInterval(() => {
        index++;
        tasse.src = imagesTasse[index];
        if (index === imagesTasse.length - 1) {
            clearInterval(intervalId);
            intervalId = null;
            index = 0;
            rectangle.style.opacity = 0; 

            tasseReady = true;
            Tasse.classList.add ("click");
            
        }
    }, 750);  
}

function clickTasse() {
    if (!tasseReady) return;

    CoffeMachine.classList.add ("hide");
    table.classList.add ("show");
    button.style.opacity =0;

    setTimeout(startSmoke, 800);
}

function startSmoke(){
    let indexSmoke = 0;
    smoke.style.display = "block";

    smokeIntervalid = setInterval(() => {
        smoke.src = imagesSmoke[indexSmoke];
        indexSmoke = (indexSmoke + 1) % imagesSmoke.length;
    }, 200);
}

button.addEventListener("click", pressButton);
tasse.addEventListener("click", clickTasse);
