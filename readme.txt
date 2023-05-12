/*----- constants -----*/
const for player- one player game
const grid (board)- grid will have 24 boxes
winning combinations (12):
    -each fact will have only one possible answer


/*----- state variables -----*/
tiles with answers to multiplcation facts in grid squares
    tiles disappear after correctly matched
multiplcation problems/facts- will alos appear in grid. Total options in grid will be 24 and include equations and answers. Answers and equations are matched by class name/id.

/*----- cached elements  -----*/
board
play again button


/*----- event listeners -----*/
click events- when tiles are clicked
    when answer is correct
    when answer is incorrect
reset button- when game is over
    will reset board to beginning state


/*----- functions -----*/
-if player clicks start game- game board appears with all tiles showing in grid
after clicking "welcome", user is taken to game board with all tiles showing
    each square in grid should be set to null?
        null state shows grid with 24 possible answers
-if player selects tile with correct answer, tile disappears
    -need for each function that iterates over board when clicked to determine if winning combination is selected
    loop continues 24 times until congratulatory message appears
 -if player selects the wrong answer tile does not disappear 
- render winning message- player can only win there is no losing
    -message will render after all winning combinations are selected


    