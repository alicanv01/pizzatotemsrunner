let gameSection = document.getElementById("gameSection");
let btnInterface = document.getElementById("btnInterface");
let btnStart = document.getElementById("btnStart");
let gameInterface = document.getElementById("gameInterface");
let charactere = document.getElementById("charactere");
let perso = document.getElementById("perso");

/////////////////////////////////outils

function getRandomNbr(min, max) {
    return Math.floor(Math.random() * (max - min) + min)}

/////////////////////////////////start

async function start() {
    console.log("btnStart a eté cliqué");
    /* il faut enlever le bouton et activer la possibiliter des action en jeux*/    
    btnInterface.classList.toggle("hidden");
    console.log("btnInterface a hidden");
    
}

/////////////////////////////////jump
let jumpPlay = false;

function jump() {
    console.log("gameInterface a eté cliqué");
    /*il faut que quand je clique sur game interface character saut*/
    
    charactere.classList.add("jump");
    jumpPlay=true;
    console.log("charactere a jump", charactere);
    
    /*ne pas pouvoi cliqué*/
    gameInterface.style.pointerEvents = "none";
    
    console.log("gameInterface a ne peu pas clicker", charactere);
    
    /*delay remettre clicable et sur primmer le jup*/
    setTimeout(function () {
        charactere.classList.remove("jump")
        gameInterface.removeAttribute("style")
        jumpPlay = false;
    }, 1000/*valeur egale de lanimation jump*/);
    ;
    
    console.log("charactere a remov jump et mettre clicable gameInterface", charactere , gameInterface);
}


        gameInterface.addEventListener("click",function () {
            if (!jumpPlay) {
              jump();
            }
          });


/////////////////////////////////creatObstacle

let nbrTotem;
let nbrTotemImg;


let dataNbr = 0; 

function addObstacle() {
    const totemContainer = document.createElement("div");
    
    let nbra = getRandomNbr(1, 3)/* nbr de combien totem dans une tour*/
    nbrTotem = nbra

    let nbrb = getRandomNbr(0, 3)/* nbr definir image du totem changer i nom dimage change*/
    nbrTotemImg =nbrb
    ++dataNbr
    if (nbrTotem == 1) {
        totemContainer.id = `smallTotem${dataNbr}` 
        totemContainer.setAttribute("data",`smallTotem${dataNbr}`)  
        totemContainer.classList.add("smallTotem");
    }
    if(nbrTotem == 2){
        totemContainer.id = `bigTotem${dataNbr}`
        totemContainer.setAttribute("data",`bigTotem${dataNbr}`) 
         totemContainer.classList.add("bigTotem");
        }
        totemContainer.classList.add("totemContainers");

    for (let index = 0; index < nbrTotem; index++) {
        const totem = document.createElement("img");
        totem.setAttribute("src",`asset/totems/totem${nbrTotemImg}.jpg`);
        totem.classList.add("totem");
        totemContainer.appendChild(totem);
    }
    
    gameInterface.appendChild(totemContainer);

    translateObstacle(totemContainer);
}




function translateObstacle(totemContainer) {
    totemContainer.classList.add("translate");
    
}






let obstacleCreationInterval;  // Ajoutez cette variable globale

btnStart.addEventListener("click", function () {

        addObstacle();

    obstacleCreationInterval = setInterval(removTotem, 10);
    start();
});

function removTotem() {
    let totemContainers = document.querySelectorAll(".totemContainers");
    let lastTotemContainer = totemContainers[totemContainers.length - 1];  // Récupère le dernier totem créé

    if (lastTotemContainer) {
        const lastTotemRect = lastTotemContainer.getBoundingClientRect();

        // Vérifie si le côté droit du dernier totem est inférieur à 800
        if (lastTotemRect.right < 800) {
            addObstacle();
        }
    }

    totemContainers.forEach(function (totemContainer) {
        const style = window.getComputedStyle(totemContainer);
        const leftValue = parseFloat(style.getPropertyValue("left"));
  
        const charactereRect = charactere.getBoundingClientRect();
        const totemContainerRect = totemContainer.getBoundingClientRect();
       const ar=false
        if (
           charactereRect.right > totemContainerRect.left &&
           charactereRect.left < totemContainerRect.right &&
           charactereRect.bottom > totemContainerRect.top &&
           charactereRect.top < totemContainerRect.bottom
        ) {
            btnInterface.classList.remove("hidden")
            totemContainer.remove();
        }

        if (totemContainerRect.left + totemContainer.offsetWidth < 150) {
            totemContainer.remove();
            console.log("Obstacle supprimé car il est sorti de la page à gauche.");
        }
     
    });
}

