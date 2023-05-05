/*----- constants -----*/
const for player- one player game
const grid (board)- grid will have 12 boxes
winning combinations (12):
    -each fact will have only one possible answer


/*----- state variables -----*/
tiles with answers to multiplcation facts in grid squares
    tiles disappear after correctly matched
multiplcation problems/facts- will display above grid.
    problems will change after each selection, whether user selects right or wrong answer
    when game begins, multiplcation fact will automatically display above board

/*----- cached elements  -----*/
board?
tiles?

/*----- event listeners -----*/
start button- begins game- all possible answers will display and multiplcation fact will show above board.
click events- when tiles are clicked
    when answer is correct
    when answer is incorrect
reset button- when game is over
    will reset board to beginning state


/*----- functions -----*/
-if player clicks start game- game board appears with all tiles showing in grid
after game starts, first multiplcation fact appears above grid.
    each square in grid should be set to null?
        null state shows grid with 12 possible answers
-if player selects tile with correct answer, tile disappears
    new multiplcation fact appears in header
    -need for each function that iterates over board when clicked to determine if winning combination is selected
    loop continues 12 times and player is declared winner
 -if player selects the wrong answer tile does not disappear 
        -multiplcation fact will reappear after loop until correct answers are chosen
- render winning message- player can only win there is no losing
    -message will render after all winning combinations are selected


    