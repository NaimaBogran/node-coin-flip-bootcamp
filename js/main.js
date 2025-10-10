//buttons and functions will be created in main.js
//fetch the server.js to get the coin flip functionality

document.querySelector('#heads').addEventListener('click', flipCoinHeads)
document.querySelector('#tails').addEventListener('click', flipCoinTails)
document.querySelector('#reset').addEventListener('click', restartGame)

function flipCoinHeads(){
    const coinGuess = document.querySelector('#coinGuess').value
//fetch coin flip
//determain whether coin lands on heads or tails
//figure out if user won
 fetch(`/api?guess=${coinGuess}`)
 .then(res => res.json())
 .then((data) => {
    console.log(data)
 })
}

function flipCoinTails(){

}

function restartGame(){

}