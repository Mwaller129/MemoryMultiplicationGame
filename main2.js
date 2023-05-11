/*----- constants -----*/
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0, 0, 0]  // col 2
    
  ];

const winningCombos = [
    [0, 17],
    [1, 10],
    [2, 9],
    [3, 6],
    [4, 13],
    [5, 14],
    [7, 22],
    [8, 16],
    [11, 18],
    [12, 21],
    [15, 19],
    [20 ,23]
];
/*----- state variables -----*/
let gameComplete; //game in play or user has completed game
let evaluate = 0 // isCorrect or is Incorrect
let player = 1
let fact = ''
let answer = ''
let choice = 0
let count = 0
/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');

/*----- event listeners -----*/
let tiles = document.querySelectorAll('#board > div')
tiles.forEach((tile) => {
    tile.addEventListener('click', function(evt) {
        let tile = evt.target
       tile.classList.add('evaluate')
        console.log(tile)
//     ifAnswer(tile) 
    })
 })
playAgainBtn.addEventListener('click', init);
/*----- functions -----*/
function init () {
    board = new Array (24).fill (null);
    render();
}

function makeChoices(evt) {
    let choice = parseInt(evt.target.id.replace('tile', ''));
    if (
        isNaN(choice) ||
        board[choice] ||
        gameComplete
    ) return;
    render();
}

function checkMatch(tile) {
    for (let i = 0; i < winningCombos.length; i++ ) {
        if (Math.abs(board[winningCombos[i][0]]+ board[winningCombos[i][0]]) === 2) return board[winningCombos[i][0]];
    }
         tile.classList.add('isCorrect')
}

function render () {
    renderBoard();
    renderMessage();
    playAgainBtn.disabled = !gameComplete;
}

