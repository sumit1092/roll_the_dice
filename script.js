let personCollection = document.querySelectorAll("input")
let btns = document.querySelectorAll('.roll')
let spans = document.querySelectorAll('span')
let winner = document.querySelector('#win-msg')
let endbtn = document.querySelector('#endbtn')
let resetbtn = document.querySelector('#reset')

endbtn.disabled = true//disable end button
resetbtn.disabled = true//disable reset button

let clicks = 0;

// function to roll the dice
const rollDice = (e) => {
  clicks++;
  if (clicks == btns.length) {
    endbtn.disabled = false//enable end button
  }
  if (clicks >= 1) {
    resetbtn.disabled = false
  }

  let clickbtn = e.target;//get the button that was clicked
  clickbtn.disabled = true;//disable the button that was clicked
  let clickbtnid = clickbtn.id;
  let diceArray = [1, 2, 3, 4, 5, 6]
  let randomnumber = parseInt(Math.random() * diceArray.length)
  let randomdice = diceArray[randomnumber]

  spans[clickbtnid].innerText = randomdice
  console.log(randomdice)
}



for (let t of btns) {
  t.addEventListener("click", rollDice)
}
endbtn.addEventListener("click", endGame)
resetbtn.addEventListener("click", resetGame)


let highScore = 0;
let highestScorer = []

// function to end the game
function endGame() {
  for (t of spans) {
    // console.log(t.innerText)
    let score = t.innerText;
    if (score > highScore) {
      highScore = score
    }
    console.log(highScore,"Highscore and Score is",score)
  }

  let highestScoredIndex = []

  for (let i = 0; i < spans.length; i++) {
    let userScore = spans[i].innerText
    if (userScore == highScore) {
      highestScoredIndex.push(i)
      console.log(personCollection[i].value)
      highestScorer.push(personCollection[i].value)
    }
  }
  winner.innerText = `winner is ${highestScorer.join()} with the 
  scored of ${highScore}`;

  endbtn.disabled = true;

  winner.style.cssText =
    `color: green; 
    font-size: 30px; 
    baackground-color: yellow;`

  resetbtn.innerHTML = "Restart";
}

// function to reset the game
function resetGame() {
  for (let t of spans) {
    t.innerText = ""
    // highScore = 0;//reset the high score
    // highestScorer = []//reset the highest scorer
  }
  for (let t of btns) {
    t.disabled = false
  }
  endbtn.disabled = true
  clicks = 0
  winner.innerHTML = ""
  resetbtn.innerHTML = "Reset"
  resetbtn.disabled = true;

  highestScorer=[]//reset the highest scorer
  highScore=0;//reset the high score
}