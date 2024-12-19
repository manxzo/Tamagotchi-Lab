/*-------------------------------- Constants --------------------------------*/

const boredInterval = setInterval(iAmBored, 1000);
const hungryInterval = setInterval(iAmHungry, 1500);
const sleepyInterval = setInterval(iAmSleepy, 3000);
const checkLossInterval = setInterval(checkLoss, 100);

/*---------------------------- Variables (state) ----------------------------*/
let boredStat = 0;
let hungerStat = 0;
let sleepStat = 0;

/*------------------------ Cached Element References ------------------------*/
const boredom = document.querySelector("#boredom-stat");
const hunger = document.querySelector("#hunger-stat");
const sleepy = document.querySelector("#sleepiness-stat");
const play = document.querySelector("#play");
const feed = document.querySelector("#feed");
const sleep = document.querySelector("#sleep");
const message = document.querySelector("#message");
const playAgainMsg = document.querySelector("#restartmsg");
const playAgainBtn = document.querySelector("#restart");
const visibile = document.querySelectorAll(".hidden");
const img = document.querySelector(".game-graphic");
/*-------------------------------- Functions --------------------------------*/
function boredomZero() {
  boredStat = 0;
  boredom.textContent = boredStat;
}
function hungerZero() {
  hungerStat = 0;
  hunger.textContent = hungerStat;
}

function sleepZero() {
  sleepStat = 0;
  sleepy.textContent = sleepStat;
}
function randOneToThree() {
  return Math.floor(Math.random() * 3) + 1;
}

function iAmBored() {
  boredStat += randOneToThree();
  boredom.textContent = boredStat;
}
function iAmHungry() {
  hungerStat += randOneToThree();
  hunger.textContent = hungerStat;
}
function iAmSleepy() {
  sleepStat += randOneToThree();
  sleepy.textContent = sleepStat;
}
function setVisible() {
  visibile.forEach((element) => {
    element.style.visibility = "visible";
  });
}
function setHidden() {
  visibile.forEach((element) => {
    element.style.visibility = "hidden";
  });
}
function stopGameAll() {
  clearInterval(boredInterval);
  clearInterval(sleepyInterval);
  clearInterval(hungryInterval);
  clearInterval(checkLossInterval);
}

function restartGame() {
  clearInterval(boredInterval);
  clearInterval(hungryInterval);
  clearInterval(sleepyInterval);
  clearInterval(checkLossInterval);

  boredStat = 0;
  hungerStat = 0;
  sleepStat = 0;

  boredom.textContent = boredStat;
  hunger.textContent = hungerStat;
  sleepy.textContent = sleepStat;

  img.src = "./assets/sprite.png";
  setHidden();

  boredInterval = setInterval(iAmBored, 1000);
  hungryInterval = setInterval(iAmHungry, 1500);
  sleepyInterval = setInterval(iAmSleepy, 3000);
  checkLossInterval = setInterval(checkLoss, 100);
}

function checkLoss() {
  if (boredStat > 30) {
    message.textContent =
      "I was so bored, I wrote my will. You're not in it!(° ͜ʖ͡°)╭∩╮\n BYEBYE!";
    playAgainBtn.textContent = "Buy PS5!";
    playAgainMsg.textContent = "I'll think about staying if you buy me a PS5!";
    img.src = "./assets/spritebored.png";
    stopGameAll();
    setVisible();
  }
  if (sleepStat > 30) {
    message.textContent = "I have insomnia because of you!눈_눈\n BYEBYE!";
    playAgainBtn.textContent = "Flight to France!";
    playAgainMsg.textContent =
      "I'll think about staying if you bring me on vacation!";
    img.src = "./assets/spritesleepy.png";
    stopGameAll();
    setVisible();
  }
  if (hungerStat > 30) {
    message.textContent =
      "Even kids in Africa eat better than me!ヽ༼ ಠ益ಠ ༽ﾉ\n BYEBYE!";
    playAgainBtn.textContent = "Buy Steak and Wine!";
    playAgainMsg.textContent = "I'll think about staying if you buy me steak!";
    img.src = "./assets/spritehungry.png";
    stopGameAll();
    setVisible();
  }
}
function checkStats() {
  if (boredStat > 20) {
    message.textContent = "I'm getting bored!(≖_≖ )";
  }
  if (sleepStat > 20) {
    message.textContent = "I'm so sleepyy!(っ˕ -｡)ᶻ 𝗓 𐰁";
  }
  if (hungerStat > 20) {
    message.textContent = "I want fooddd!(✧﹃ ✧)";
  }
}

/*<----------------------------- Event Listeners -----------------------------*/

play.addEventListener("click", () => {
  boredomZero();
});
feed.addEventListener("click", () => {
  hungerZero();
});
sleep.addEventListener("click", () => {
  sleepZero();
});
playAgainBtn.addEventListener("click", () => {
  restartGame();
});
