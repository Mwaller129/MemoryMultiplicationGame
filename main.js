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
let count = 0
/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');
//const messageEl = document.querySelector('q1');
//const boardEls = document.getElementById('div');
const set = () => {
    let evaluate = document.querySelectorAll('.evaluate')
    evaluate.forEach((tile) => {
    tile.classList.add('set')
    
})
}
 const resetGame = () => {
     fact = ''
     answer = ''
     count = 0

     let evaluate = document.querySelectorAll('.evaluate')
     evaluate.forEach((tile) => {
         tile.classList.remove('evaluate')
     })
    }


/*----- event listeners -----*/
let tiles = document.querySelectorAll('#board > div')
tiles.forEach((tile) => {
    tile.addEventListener('click', function(evt) {
        tile.classList.add('evaluate')
        console.log(tile)

    })
})



//     
//     console.log(choice);
//     //render();

       
// } else {
//     resetGame();
//  }
// 
//     //  if (fact === fact || answer === answer)  
//     //  return; 
     
//     
//})


/*----- functions -----*/
init = () => {
//gameComplete = null;
  render();

};

function ifAnswer() {
    let count = 0
    fact = ''
    answer= ''

    if (count < 2) {
         count++
      if (count === 1) {
        fact = tiles.dataset.name
        tiles.classList.add('evaluate') 
     } else {
       answer = tiles.dataset.name
        tiles.classList.add('evaluate')
    }
}
}

function ifCorrect () {
    let count = 0
    fact = ''
    answer= ''
    if (fact !== '' && answer !== '') {
             if (fact === answer) {
                 set();  
           
    }
}
}

function ifIncorrect () {
    let count = 0
    fact = ''
    answer= '' 

    if (fact !== answer || fact === fact || answer === answer)  
       return; 
}


//  board.forEach((item) => {
//      const tile = document.getElementById('div')
//      tile.classList.add('tile')    
//      tile.classList.name = item.name
    
//  })
// function makeChoices(evt) {
//     let choice = evt.target
//     if (choice === 'div'){
//         return
//     }
//     choice.classList.add('choice')
//     console.log(evt.target);
    //render();
//}
item = () => {
tile.dataset.name = item.name
    let item = document.getElementById('div')
}
//  const set = () => {
//      let evaluate = document.querySelectorAll('.evaluate')
//      evaluate.forEach((tile) => {
//      tile.classList.add('set')
//  })
//  }


// board.addEventListener('click', function (event) {
//     let choice = evt.target
//     if (choice === 'div'){
//         return
//     }
//     choice.classList.add('choice')
//     console.log(evt.target);
//     //render();
// if (count < 2) {
//     count++
//     if (count === 1) {
//        fact = choice.dataset.name
//        choice.classList.add('choice')
//     } else {
//         answer = choice.dataset.name
//         choice.classList.add('choice')
//     }
//     if (fact !== '' && answer !== '') {
//         if (fact === answer) {
//             set()
//         }
//     }
// }
// })

render = () => { //display full board
    renderBoard();
    renderDone();//congratulatory messgae when player finsihes
    //renderControls();

};


 


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

function renderControls()    {
    //playAgainBtn.addEventListener('click', init);
    //playAgainBtn.style.visibility = done ? 'visible' : 'hidden';
}


//   const resetGame = () => {
//       fact = ''
//       answer = ''
//       count = 0

//       let evaluate = document.querySelectorAll('.evaluate')
//       evaluate.forEach((tile) => {
//           tile.classList.remove('evaluate')
//       })
//      }
//})
