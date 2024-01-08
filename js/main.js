let animationEnCours = false;
const playBtn = document.getElementById("playBtn");
const home = document.getElementById('home');
const gameInterface = document.getElementById('gameInterface');
const character = document.getElementById("character");

let gameStarted = false;
let bigObstacleCounter = 0;
let obstacleInterval = 3000;
let accelerationInterval = 10000;
let obstacleCreationInterval;

playBtn.addEventListener("click", function() {
  startGame();
});

function startGame() {
  gameStarted = true;
  gameInterface.style.display = "none";
  obstacleCreationInterval = setInterval(createObstacle, obstacleInterval);
  setInterval(accelerateGame, accelerationInterval);
}

function createObstacle() {
  if (gameStarted) {
    const bigObstacle = document.createElement('div');
    bigObstacle.className = "obstacleBig";
    const numberOfObstacles = Math.floor(Math.random() * 2) + 1;
    const obstacleIndex = bigObstacleCounter += 1;
    bigObstacle.setAttribute("obstacleIndex", `obstacle${obstacleIndex}`);

    for (let i = 0; i < numberOfObstacles; i++) {
      const smallObstacle = document.createElement("div");
      smallObstacle.className = "obstacle";
      bigObstacle.appendChild(smallObstacle);
    }

    document.getElementById('map').appendChild(bigObstacle);

    obstacleInterval = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;

    clearInterval(obstacleCreationInterval);
    obstacleCreationInterval = setInterval(createObstacle, obstacleInterval);
  }
}

function accelerateGame() {
  if (gameStarted) {
    obstacleInterval -= 500;
    clearInterval(obstacleCreationInterval);
    obstacleCreationInterval = setInterval(createObstacle, obstacleInterval);
  }
}

function compareAndActOnObstacles() {
  if (gameStarted) {
    const a =0;
    let obstacles = document.querySelectorAll(".obstacleBig");
    obstacles.forEach(function (obstacle) {
      const style = window.getComputedStyle(obstacle);
      const leftValue = parseFloat(style.getPropertyValue("left"));

      const characterRect = character.getBoundingClientRect();
      const obstacleRect = obstacle.getBoundingClientRect();

      if (
        characterRect.right > obstacleRect.left &&
        characterRect.left < obstacleRect.right &&
        characterRect.bottom > obstacleRect.top &&
        characterRect.top < obstacleRect.bottom
      ) {
        alert("Game Over");
        gameInterface.style.display = "block";
        gameStarted = false;
        clearInterval(obstacleCreationInterval);
        a = 1 
      }

      if (leftValue + obstacle.offsetWidth < 0 || a==1) {
        obstacle.remove();
        console.log("Obstacle supprimé car il est sorti de la page à gauche.");
      }
    });
  }
}

setInterval(compareAndActOnObstacles, 10);

document.addEventListener("click", function () {
  if (gameStarted && !animationEnCours) {
    jump();
  }
});

function jump() {
  document.body.style.pointerEvents = "none";

  character.classList.add("animJump");
  animationEnCours = true;

  setTimeout(function () {
    document.body.style.pointerEvents = "auto";
    removeJump();
  }, 1000);
}

function removeJump() {
  character.classList.remove("animJump");
  animationEnCours = false;
}
