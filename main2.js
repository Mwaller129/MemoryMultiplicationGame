/*----- constants -----*/
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 0
    [0, 0, 0, 0, 0, 0, 0, 0],  // col 1
    [0, 0, 0, 0, 0, 0, 0, 0]  // col 2
    
  ];
//board with all possible answers and equations

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
//all possible winning combinations that are linked by div ID
/*----- state variables -----*/
let choice = 0
//determines which div in board is selected
/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
const message = document.querySelector('h1');
/*----- functions -----*/
const start = () => {
    window.location.reload()
}
//for play again button (function is below all other code)

const init = () => {
    gameGrid = new Array (24).fill (null);
    render();
}
//displays game board with all possible selections showing

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
        //determines when first selection is made and adds class name of evaluate to make selection appear as aquamarine. same is repeated for selection 2.
        } else if (count === 2) {
            selection2 = evt.target
            selection2.classList.add('evaluate')
            count --
             if (selection1.classList[0] === selection2.classList[0]) { 
                    selection1.classList.add('correct')
                    selection2.classList.add('correct')
                    matches++
                    if (matches === 12) {
                        message.innerText = 'Congratulations, You just completed the 5 Times Tables!'
                    }
         } else {
            setTimeout(() => {
            selection1.classList.remove('evaluate')
            selection2.classList.remove('evaluate')
            selection1.classList.add('incorrect')
            selection2.classList.add('incorrect')
            return
        }, 1000);
         }
         } 
        //if user makes incorrect match, class name of incorrect is added to both selections and they turn red. timer is set to remove the selections after 1 second.
    
    if (choice === winningCombos) {
        choice.classList.add("correct")  
    }
})
// if winning combination is selected that equation and answer disappear.
    
})
const renderControls = () =>  {
    playAgainBtn.style.visibility = 'visible' 
}
//makes play agin button visible
const render = () => {
    renderControls();   
}


init ();
    /*----- event listeners -----*/
    
    playAgainBtn.addEventListener('click', start);
// resets game