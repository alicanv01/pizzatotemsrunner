const playBtn =document.getElementById("playBtn");
const home = document.getElementById('home');



console.log(playBtn)




let dataNbr = 0;

function creationObtacle() {
  const obstacleBig =document.createElement('div');
  obstacleBig.className = "obstacleBig";
  const nombreObstacles = Math.floor(Math.random() * 2) +1; // Changer le nombre selon vos besoins
  const dataObtacle = dataNbr += 1
  obstacleBig.setAttribute("Obstacle",`obstacle${dataObtacle}`)
for (let i = 0; i < nombreObstacles; i++) {
  const obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacleBig.appendChild(obstacle);
}
map.appendChild(obstacleBig);

}
setInterval(creationObtacle, 3000);



var obstacles = document.querySelectorAll(".obstacleBig");

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