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
let choice = 0

/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
const message = document.querySelector('h1');
/*----- event listeners -----*/
let tiles = document.querySelectorAll('#board > div')
tiles.forEach((tile) => {
    tile.addEventListener('click', function(evt) {
        let tile = evt.target
       tile.classList.add('answer')
        //console.log(tile)
//     ifAnswer(tile) 
    })
 })
playAgainBtn.addEventListener('click', init);
/*----- functions -----*/
init ();


function init () {
    gameGrid = new Array (24).fill (null);
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
let grid = document.querySelectorAll('board')
grid.forEach((selection) => { 
 selection.addEventListener('click', function(evt) {
         let choice = evt.target
    // for (let i = 0; i < winningCombos.length; i++ ) {
    //     if (Math.abs(gameGrid[winningCombos[i][0]]+ gameGrid[winningCombos[i][1]]) === 2) 
    //     return gameGrid[winningCombos[i][0]]; 
    
    if (choice === winningCombos) {
        choice.classList.add("correct")
        console.log('choice')
    }
})
    
    
    
    //      if (board.includes(null)); return null;
    //       return;
     })

function render () {
    renderMessage();
    renderControls();
    
}


function renderMessage ()  {
    if (gameComplete) {
        message.innerHTML = `Congratulations, You just completed you're 5's Times Tables!`
    }
}

function renderControls ()  {
    playAgainBtn.disabled = !gameComplete;
    playAgainBtn.style.visibility = gameComplete ? 'visible' : 'hidden';
}