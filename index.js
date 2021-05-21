const containers = document.querySelectorAll(".container");
const btnStart = document.getElementById("btn-start");
const btnPick = document.querySelectorAll(".enemy-button");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");

let seconds = 0;
let score = 0;
let selected_enemy = {};

btnStart.addEventListener("click", () => {
  containers[0].classList.add("up");
});

btnPick.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const alt = img.getAttribute("alt");
    const src = img.getAttribute("src");
    selected_enemy = { img, src };
    containers[1].classList.add("up");
    console.log(selected_enemy);
    createEnemy();
    spawn();
    setInterval(() => {
      seconds++;
      timeEl.innerHTML = `time : ${seconds}`;
    }, 1000);
    timer();
  });
});

function createEnemy() {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  const x = window.innerWidth;
  const y = window.innerHeight;
  const width = Math.random() * (x - 200) + 100;
  const height = Math.random() * (y - 200) + 100;
  console.log(width, height);

  enemy.style.top = `${height}px`;
  enemy.style.right = `${width}px`;
  enemy.innerHTML = `<img src="${selected_enemy.src}" alt="${selected_enemy.alt}"/>`;
  console.log(enemy);
  gameContainer.appendChild(enemy);
  enemy.addEventListener("click", deleteEnemy);

  // setTimeout(spawn, 5000);
}
function spawn() {
  setInterval(createEnemy, 1000);
}

function deleteEnemy() {
  this.classList.add("enemy-delete");
  addScore();
  // createEnemy();
}

const addScore = () => {
  score++;
  scoreEl.innerHTML = `score : ${score}`;
};
// <div class="enemy">
//         <img src="./angular.svg" alt="" />
//       </div>
