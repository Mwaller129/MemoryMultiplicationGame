/*----- constants -----*/
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0, 0, 0]  // col 2
    
  ];

// const winningCombos = [
//     [0, 17],
//     [1, 10],
//     [2, 9],
//     [3, 6],
//     [4, 13],
//     [5, 14],
//     [7, 22],
//     [8, 16],
//     [11, 18],
//     [12, 21],
//     [15, 19],
//     [20 ,23]
// ];

let winningCombos = {
    id: 'c0r0',
    value: 'c2r6', 
    id: 'c1r0',
    value: 'c1r4',
    id: 'c2r0',
    value: 'c0r4',
    id: 'c0r1',
    value:'c0r3',
    id: 'c1r1',
    value:'c1r5',
    id: 'c2r1',
    value:'c2r5',
    id: 'c1r3',
    value:'c1r8',
    id: 'c2r3',
    value:'c1r6',
    id: 'c2r4',
    value:'c0r7',
    id: 'c0r5',
    value: 'c0r8',
    id: 'c0r6',
    value: 'c1r7',
    id: 'c2r7',
    value: 'c2r8',
    
}

/*----- state variables -----*/
let gameComplete; //game in play or user has completed game
let choice = 0

/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
const message = document.querySelector('h1');
/*----- functions -----*/



const init = () => {
    gameGrid = new Array (24).fill (null);
    render();
}

//  function makeChoices(evt) {
//      let choice = parseInt(evt.target.id.replace('tile', ''));
//      if (
//          isNaN(choice) ||
//          board[choice] ||
//          gameComplete
//      ) return;
//      render();
//  }


 let count = 1
 let selection1
 let selection2
 let matches = 0
let grid = document.querySelectorAll('#board > div')
grid.forEach((selection) => { 
 selection.addEventListener('click', function(evt) {
        if (count === 1)    {
            selection1 = evt.target
            selection1.classList.add('evaluate')  
            count ++
        
        } else if (count === 2) {
            
            selection2 = evt.target
            
            selection2.classList.add('evaluate')
            // let option1 = selection1.classList
            // console.log(option1 )
            // let option2 = selection2.classList.slice()

            
            count --
             if (selection1.classList[0] === selection2.classList[0]) {
                    console.log("this is a Match")
                    selection1.classList.add('correct')
                    selection2.classList.add('correct')
                    matches++
                    if (matches === 12) {
                        message.innerText = 'Congratulations, You just completed the 5s Times Tables!'
                    } 
         } else {
            console.log("this is not a match")
            selection1.classList.remove('evaluate')
            selection2.classList.remove('evaluate')
            selection1.classList.add('incorrect')
            selection2.classList.add('incorrect')
            //set timer for everything inside of else
            return
         }
         } 
        
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
const renderControls = () =>  {
    playAgainBtn.disabled = !gameComplete;
    playAgainBtn.style.visibility = gameComplete ? 'visible' : 'hidden';
}

const render = () => {
    renderControls();   
}


init ();
    /*----- event listeners -----*/
    
    playAgainBtn.addEventListener('click', init);