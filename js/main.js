const playBtn =document.getElementById("playBtn");
const home = document.getElementById('home');



console.log(playBtn)




//const obstacleBig = document.getElementById("obstacleBig");
//
//// Obtenez le style calculé pour cet élément
//const obstacleBigStyles = window.getComputedStyle(obstacleBig);
//
//// Récupérez la largeur à partir du style calculé
//const obstacleBigWidth = obstacleBigStyles.getPropertyValue("width");
//const obstacleBigHeight = obstacleBigStyles.getPropertyValue("height");
//const obstacleBigTop = obstacleBigStyles.getPropertyValue("Top");
//const obstacleBigLeft = obstacleBigStyles.getPropertyValue("Left");


//console.log('obstacleBig:',obstacleBig,'. obstacleBigWidth:',obstacleBigWidth,' obstacleBigLeft:',obstacleBigLeft,' obstacleBigTop:',obstacleBigTop);
//
//const character = document.getElementById("character");
//
//// Obtenez le style calculé pour cet élément
//const characterStyles = window.getComputedStyle(character);
//
//// Récupérez la largeur à partir du style calculé
//const characterWidth = characterStyles.getPropertyValue("width");
//const characterHeight = characterStyles.getPropertyValue("height");
//const characterTop = characterStyles.getPropertyValue("top");
//const characterBottom = characterStyles.getPropertyValue("bottom");
//const characterLeft = characterStyles.getPropertyValue("left");
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


const map = document.getElementById("map")





const obstacleBig =document.createElement('div');
obstacleBig.className = "obstacleBig";

const nombreObstacles = 2; // Changer le nombre selon vos besoins

for (let i = 0; i < nombreObstacles; i++) {
  const obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacleBig.appendChild(obstacle);
}

map.appendChild(obstacleBig);




//var img =document.createElement('img');
//
//img.className=(`gif${item.key}`);
//
//img.setAttribute("src",`${item.link}`);
//
//span.appendChild(img)




















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