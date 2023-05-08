/*----- constants -----*/
const board = [
    [1, 0, 0,],  // col 0
    [0, 0, 0,],  // col 1
    [0, 0, 0,],  // col 2
    [0, 1, 0,]  // col 3
  ];

  const questions = ['5 x 3', '5 x 7', '5 x 10', '5 x 4', '5 x 1', '5 x 5', '5 x 11', '5 x 2', '5 x 12', '5 x 9', ' 5 x 6', '5 x 8']


/*----- state variables -----*/ 
let gameComplete; //game in play or user has completed game
let evaluate; // isCorrect or is Incorrect
let player = 1
/*----- cached elements  -----*/
const messageEl = document.querySelector('q1');
const boardEls = document.getElementById(board);

/*----- event listeners -----*/
document.getElementById('questions').addEventListener('click', handleClick);
document.getElementById('board').addEventListener('click', makeChoices);

/*----- functions -----*/
init = () => {
  gameComplete = null;
  render();

};
//boardEls.forEach((, colIdx) => {
  //  const hideCell = (!board[colIdx].isCorrect || gameComplete === true)
    //   evaluate =`${c0r1}` === true
//})

function makeChoices(evt) {
    const rowIdx = board.indexOf(evt.target);
    console.log(evt.target);
    render();
}


function renderBoard() {
   board.forEach((colArr, colIdx) => {
        colArr.forEach((cellval, rowIdx) => {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
        });
       
        });
        
    }


function renderDone() {
    if (gameComplete === 'C') {
        messageEl.innerText = "Congratulations!" 
    } else {
        messageEl.innerText = 'questions[1]';

    }
}

function renderControls()    {
    startAgainBtn.style.visibility = done ? 'visible' : 'hidden';
}



render = () => { //display full board
    renderBoard();
    renderDone();//congratulatory messgae when player finsihes
    renderControls();

}