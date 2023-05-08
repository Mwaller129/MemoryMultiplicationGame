/*----- constants -----*/
const answers = [
    [1, 0, 0,],  // col 0
    [0, 0, 0,],  // col 1
    [0, 0, 0,],  // col 2
    [0, 0, 0,]  // col 3
  ];

  const questions = []


/*----- state variables -----*/ 
let gameComplete; //game in play or user has completed game
// set Timeout to make question change 

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
const init = () => {
  complete = null;
  render();
}

render => { //display full board
    renderAnswers();
    renderDone();//congratulatory messgae when player finsihes
    renderControls();

}

renderAnswers => {
    answers.forEach((ansIdx, colArr) => {
       // if ansInd === match for equation in header, answer is hidden
        });
        
    };


function renderDone() {

}

function renderControls()    {

}

