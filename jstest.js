
// ------------------------------------------------------------------------------------------------------------------------------
/*
let randomInt = Math.random();
console.log(randomInt);
*/


// ------------------------------------------------------------------------------------------------------------------------------
/* num1 = Number(prompt('num1?'));
num2 = Number(prompt('num2? '));
alert(`The result is: ${num1 + num2}`); */



// ------------------------------------------------------------------------------------------------------------------------------
/* let testarr = [
  'egy', 'kettő', 'három', 'négy', 'öt', 'hat'
];

console.log(testarr);

testarr.push('hét');

console.log(testarr);
console.log(testarr.slice(0, 3));
console.log(`Index of \"három\": ${testarr.indexOf('három')}`);

console.log(testarr.length); */


// --------------------------------------------------------------------------------------------------------------------------------
/* let tObject = {
  'name': 'Ronaldo',
  'text': 'SIUUUUU',
};

console.log(tObject.name);
console.log(tObject.text);
tObject.added = 'added text';
console.log(tObject.added);
console.log(tObject);

function intro(presonName, personAge) {
  const introText = `Hello im ${presonName}, im ${personAge} and im under the water.`;
  return introText;
}

console.log(`\n${intro('Józsi', 10)}`); */

// ------------------------------------------------------------------------------------------------------------------------------
/* fruits = [
  'alma',
  'körte',
  'szőlő',
  'káposzta',
  'kecske',
  'telefon',
  'OaAOAOPAOAOAOaoaoOaO',
];

for (let itemFruit of fruits) {
  console.log(`fruit: ${itemFruit}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

for (let num = 10; num >= 1; num /= 2) {
  console.log(num)
}
*/


// ------------------------------------------------------------------------------------------------------------------------------
/* let nums = [1, 2, 3]
const testFuncRes = nums.reduce((a, b) => a + 10 / b)
console.log(testFuncRes) */


// ------------------------------------------------------------------------------------------------------------------------------
/* function highOrder(functionParameter) {
  functionParameter += 10
  console.log(functionParameter)
}

function lowOrderFunction(num) {
  return num
}

highOrder(lowOrderFunction(11)) */

// ------------------------------------------------------------------------------------------------------------------------------

// deaclare variables
const htmlText = document.getElementById('textToChange')
const details = document.getElementById('details')
const userInputBar = document.getElementById('UserInput')
const history = document.getElementById('history')

const winsCounter = document.getElementById('wins')
const lossesCounter = document.getElementById('losses')
const drawsCounter = document.getElementById('draws')

let wins = 0
let losses = 0
let draws = 0


// losing/winning/draw text and add +1 to statistics
function win(playerDataWin, computerDataWin) {
  htmlText.style.color = 'green'
  htmlText.innerText = 'You won!'
  details.innerText = `You chose ${playerDataWin}, and the computer chose ${computerDataWin}.`
  wins++
  winsCounter.innerText = wins
}


function lose(playerDataLose, computerDataLose) {
  htmlText.style.color = 'darkred'
  htmlText.innerText = 'You lost!'
  details.innerText = `You chose ${playerDataLose}, and the computer chose ${computerDataLose}.`
  losses++
  lossesCounter.innerText = losses
}


function draw(playerDataDraw, computerDataDraw) {
  htmlText.style.color = 'gold'
  htmlText.innerText = 'Its a draw!'
  details.innerText = `You chose ${playerDataDraw}, and the computer chose ${computerDataDraw} too.`
  draws++
  drawsCounter.innerText = draws
}


// calculate who wins w/ switches
function calcWin(player, computer) {
  if (player == 'rock') {
    switch (computer) {
      case 'rock':
        draw(player, computer)
        break
      case 'paper':
        lose(player, computer)
        break
      case 'scissors':
        win(player, computer)
        break
    }
  }
  else if (player == 'scissors') {
    switch (computer) {
      case 'rock':
        lose(player, computer)
        break
      case 'paper':
        win(player, computer)
        break
      case 'scissors':
        draw(player, computer)
        break
    }
  }
  else if (player == 'paper') {
    switch (computer) {
      case 'rock':
        win(player, computer)
        break
      case 'paper':
        draw(player, computer)
        break
      case 'scissors':
        lose(player, computer)
        break
    }
  }
}


// get random choice for computer and calc win
function playerChosen(playerChoice) {
  randomChoice = Math.floor(Math.random() * 3.4)
  let computerChoice
  switch (randomChoice) {
    case 0:
      computerChoice = 'rock'
      calcWin(playerChoice, computerChoice)
      break
    case 1:
      computerChoice = 'paper'
      calcWin(playerChoice, computerChoice)
      break
    case 2:
      computerChoice = 'scissors'
      calcWin(playerChoice, computerChoice)
      break
  }
  console.log(`You chose: ${playerChoice}\nThe computer chose: ${computerChoice}`)

}


// submit text in userINputBar
const submit = () => {
  let input = userInputBar.value
  let prev = history.innerText
  userInputBar.value = ''
  prev = String(prev) + `${String(input)}\n`
  history.innerText = prev
}

console.log('hello')