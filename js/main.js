const playBtn = document.getElementById("playBtn");
const home = document.getElementById('home');



console.log(playBtn)




<<<<<<< HEAD


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
=======
let dataNbr = 0;
>>>>>>> 3682cf712779b41f4c3cc14c8c9835f61fd11efe

function creationObtacle() {
  const obstacleBig =document.createElement('div');
  obstacleBig.className = "obstacleBig";
  const nombreObstacles = Math.floor(Math.random() * 2) +1; // Changer le nombre selon vos besoins
  const dataObtacle = dataNbr += 1
  obstacleBig.setAttribute("Obstacle",`obstacle${dataObtacle}`)
for (let i = 0; i < nombreObstacles; i++) {
  const obstacleBig = document.createElement('div');
  obstacleBig.className = "obstacleBig";
  const obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacleBig.appendChild(obstacle); map.appendChild(obstacleBig);
}
<<<<<<< HEAD

=======
map.appendChild(obstacleBig);
>>>>>>> 3682cf712779b41f4c3cc14c8c9835f61fd11efe

}
setInterval(creationObtacle, 3000);



<<<<<<< HEAD

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











=======
var obstacles = document.querySelectorAll(".obstacleBig");
>>>>>>> 3682cf712779b41f4c3cc14c8c9835f61fd11efe

// ...

function comparerEtAgirSurObstacles() {
  var obstacles = document.querySelectorAll(".obstacleBig");
  obstacles.forEach(function (obstacle) {
    var style = window.getComputedStyle(obstacle);
    var valeurLeft = parseFloat(style.getPropertyValue("left"));

    if (valeurLeft + obstacle.offsetWidth < 0) {
      obstacle.remove();
      console.log("Obstacle supprimé car il est sorti de la page à gauche.");
    }
  });
}

setInterval(comparerEtAgirSurObstacles, 100);

// ...




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
  
  document.body.style.pointerEvents = "none";

  character.classList.add("animJump");
  animationEnCours = true;

  
  setTimeout(function () {
    document.body.style.pointerEvents = "auto";
    removeJump();
  }, 1500);
}