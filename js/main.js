const playBtn = document.getElementById("playBtn");
const home = document.getElementById('home');



console.log(playBtn)






//console.log('obstacleBig:',obstacleBig,'. obstacleBigWidth:',obstacleBigWidth,' obstacleBigLeft:',obstacleBigLeft,' obstacleBigTop:',obstacleBigTop);
//
const character = document.getElementById("character");
//
//// Obtenez le style calculé pour cet élément
//const characterStyles = window.getComputedStyle(character);
//

//console.log('character:',character,'. characterWidth:',characterWidth,' characterLeft:',characterLeft,' characterTop:',characterTop,' characterHeight:',characterHeight,' characterBottom:',characterBottom);
//
//console.log('characterBottom:',characterBottom)
//console.log('obstacleBigHeight:',obstacleBigHeight)
//console.log('obstacleBigLeft:',obstacleBigLeft)
//
//
//if (characterBottom < obstacleBigHeight && obstacleBigLeft <= characterWidth) {
//    console.log('c perdu')
//}else{
//    console.log('continu')
//}
// Récupérez la largeur à partir du style calculé
const characterWidth=character.style.getPropertyValue("width");
const characterHeight = character.style.getPropertyValue("height");
const characterTop = character.style.getPropertyValue("top");
const characterBottom =character.style.getPropertyValue("bottom");
const characterLeft =character.style.getPropertyValue("left");

const map = document.getElementById("map")
const randomNbr = Math.floor((Math.random() * 2) + 1);
console.log(randomNbr)

const nombreObstacles = randomNbr; // Changer le nombre selon vos besoins

for (let i = 0; i < nombreObstacles; i++) {
  const obstacleBig = document.createElement('div');
  obstacleBig.className = "obstacleBig";
  const obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacleBig.appendChild(obstacle); map.appendChild(obstacleBig);
}






var obstacleBigLeft = 300;
const obstacleBiga = document.getElementsByClassName("obstacleBig")[0]; // Sélectionnez le premier élément de la collection

function animObstacle() {
  obstacleBigLeft -= 0.5;
  obstacleBiga.style.left = obstacleBigLeft + "px";
  if (obstacleBigLeft <= 50 && obstacleBigLeft >= 0 && bottom) {
    console.log("alican")
  }
}

const anime = setInterval(animObstacle, 10);




















let animationEnCours = false;


document.addEventListener("click", function () {
  if (!animationEnCours) {
    jump();
  }
});

function removeJump() {
  character.classList.remove("animJump");
  animationEnCours = false;
}

function jump() {
  // Désactiver l'interaction avec l'écran entier (body)
  document.body.style.pointerEvents = "none";

  // Votre fonction à exécuter ici
  character.classList.add("animJump");
  animationEnCours = true;

  // Réactiver l'interaction avec l'écran entier après l'exécution de la fonction
  setTimeout(function () {
    document.body.style.pointerEvents = "auto";
    removeJump();
  }, 800);
}