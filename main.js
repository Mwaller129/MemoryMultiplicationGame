/*----- constants -----*/
const board = [
    [1, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0],  // col 2
    [0, 1, 0, 0, 0, 0]  // col 3
  ];


  //const questions = ['5 x 3', '5 x 7', '5 x 10', '5 x 4', '5 x 1', '5 x 5', '5 x 11', '5 x 2', '5 x 12', '5 x 9', ' 5 x 6', '5 x 8']


/*----- state variables -----*/ 
let gameComplete; //game in play or user has completed game
let evaluate = 0 // isCorrect or is Incorrect
let player = 1
let fact = ''
let answer = ''
let choice = 0
/*----- cached elements  -----*/
//const messageEl = document.querySelector('q1');
const boardEls = document.getElementById('div');

/*----- event listeners -----*/
//document.getElementById('questions').addEventListener('click', handleClick);
document.getElementById('board').addEventListener('click', makeChoices);

/*----- functions -----*/
init = () => {
  gameComplete = null;
  render();

};

render = () => { //display full board
    renderBoard();
    renderDone();//congratulatory messgae when player finsihes
    //renderControls();

}

 board.forEach((item) => {
     const tile = document.createElement('div')
     tile.classList.add('tile')    
     tile.classList.name = item.name
     
 })
 
function makeChoices(evt) {
    let choice = evt.target
    if (choice === 'div'){
        return
    }
    choice.classList.add('choice')
    console.log(evt.target);
    render();
}
item = () => {
choice.dataset.name = item.name
    let item = docume.getElementById('div')

let count = 0
if (count < 2) {
    count++
    if (count === 1) {
       fact = choice.dataset.name
       choice.classList.add('choice')
    } else {
        answer = choice.dataset.name
        choice.classList.add('choice')
    }
    if (fact !== '' && answer !== '') {
        if (fact === answer) {
            set()
        }
    }
}
};
const set = () => {
    let choice = document.querySelectorAll('.choice')
    choice.forEach((tile) => {
        tile.classList.add('set')
    })
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
        

    }
}

//function renderControls()    {
    //startAgainBtn.style.visibility = done ? 'visible' : 'hidden';
//}



