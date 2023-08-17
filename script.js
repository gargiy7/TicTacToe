const playground = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const playgroundId = ['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8']
const wincombo = [
  ['btn0', 'btn1', 'btn2'], ['btn3', 'btn4', 'btn5'],
  ['btn6', 'btn7', 'btn8'], ['btn0', 'btn3', 'btn6'], ['btn1', 'btn4', 'btn7'], ['btn2', 'btn5', 'btn8'], ['btn0', 'btn4', 'btn8'], ['btn2', 'btn4', 'btn6']]
const playerArr = []
const cpuArr = []
let playerIcon = ''
let cpuIcon = ''
let demo = document.getElementById('demo')
let allgame = document.getElementById('allgame')

const iconSelectorX = (event) => {
  playerIcon = event.target.value;
  cpuIcon = 'O'
}
const iconSelectorO = (event) => {
  playerIcon = event.target.value;
  cpuIcon = 'X'
}

const gameOn = (event) => {
  let id = event.target.id;
  document.getElementById(id).innerHTML = playerIcon;
  playerArr.push(id)
  playgroundId.splice(playgroundId.indexOf(id), 1)
  document.getElementById(id).disabled = true;
  //checking winner
  playerArr.length === 5 ? winnerSelect(playerArr, cpuArr, wincombo) ? null : allgame.innerText = 'Its Just the Matter of time Mankind, Before I come for you' : null
  //setting up cpu selection
  let cpuIdselection = playgroundId[Math.floor(Math.random() * playgroundId.length)]
  document.getElementById(cpuIdselection).innerHTML = cpuIcon;
  cpuArr.push(cpuIdselection)
  playgroundId.splice(playgroundId.indexOf(cpuIdselection), 1)
  document.getElementById(cpuIdselection).disabled = true;
  //checking winner
  winnerSelect(playerArr, cpuArr, wincombo)
  console.log(playerArr)
  console.log(cpuArr)
}

const winnerSelect = (playerArr, cpuArr, wincombo) => {
  if (playerArr.length >= 3 && cpuArr.length >= 3 && playerArr.length < 5) {
    for (let x of wincombo) {
      if (playerArr.indexOf(x[0]) !== -1 && playerArr.indexOf(x[1]) !== -1 && playerArr.indexOf(x[2]) !== -1) { allgame.innerText = 'On Your FACE AI !!!'; return true }
      else if (cpuArr.indexOf(x[0]) !== -1 && cpuArr.indexOf(x[1]) !== -1 && cpuArr.indexOf(x[2]) !== -1) { allgame.innerText = 'HUMANS, You lost it. And Not Just the GAME !!!'; return true }
    }
  }
  else if (playerArr.length === 5) {
    for (let x of wincombo) {
      if (playerArr.indexOf(x[0]) !== -1 && playerArr.indexOf(x[1]) !== -1 && playerArr.indexOf(x[2]) !== -1) { allgame.innerText = 'On Your FACE AI !!!'; return true }
    }

  }
  return false
}

