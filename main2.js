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


/*----- cached elements  -----*/
const playAgainBtn = document.querySelector('button');

/*----- event listeners -----*/
let tiles = document.querySelectorAll('#board > div')
tiles.forEach((tile) => {
    tile.addEventListener('click', function(evt) {
        let tile = evt.target
        tile.classList.add('evaluate')
        console.log(tile)
    ifAnswer(tile) 
    })
})
playAgainBtn.addEventListener('click', init);
/*----- functions -----*/
function init () {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0],  // col 0
        [0, 0, 0, 0, 0, 0, 0, 0],  // col 1
        [0, 0, 0, 0, 0, 0, 0, 0]  // col 2
      ];
    render();
}
