const statusDisplay = document.querySelector('.game--status');
let gameActive=true;//initial state of a game
let currentPlayer="X";//INITIAL PLAYER
//INITILAIZE THE ALL 9 CELLS AS EMPTY CELLS
let gameState=["","" ,"","","","","","",""];
//give a wiining msg X,O
const winningMessage=()=>`player ${currentPlayer} has won!`;
const drawMessage=()=> 'Game ended in draw';
const currentPlayerTurn=()=>`Its ${currentPlayer} turn`;
statusDisplay.innerHTML=currentPlayerTurn();
//declare 5 fiunctions
function handleCellPlayed()
{

}
function handlePlayerChange()
{

}
function handleResultValidation(){

}
function handleCellClick()
{

}
function handleRestartGame(){
    
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
//part-2 of the ccode -handleCellClick-->handl plaeCell
function handleCellClick(clickedCellEvent){
    const clickedCell=clickedCellEvent.target;//moving the cursor
    const clickedCellIndex=parseInt(clickedCell.getAttribute('data-cell-index'));//it stores the 2 as the value as per our example
    if(gameState[clickedCellIndex]!=="" || !gameActive )
    {
        return;//this doesnot allow to click a cell twice.playing after game over
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
//part- 3 of the program
function handleCellPlayed(clickedCell, clickedCellIndex){
gameState[clickedCellIndex]=currentPlayer;
clickedCell.innerHTML=currentPlayer;
}
//part-4 result validation probabilities
const winningConditions=[
    [0,1,2],//0 array[array]];
    [3,4,5],//1
    [6,7,8],//2
    [0,4,8],//3
    [2,4,6],//4
    [0,3,6],//5
    [2,5,8],//6
    [1,4,7]//7
];
function handleResultValidation()
{
    let roundWon=false;
    for(let i=0;i<=7;i++)
    {
        const winCondition=winningConditions[i];
        let a=gameState[winCondition[0]];
        let b=gameState[winCondition[1]];
        let c=gameState[winCondition[2]];
        if(a===""|| b===""||c==="")
        {
            continue;
        }
        if(a===b && b===c)
        {
roundWon=true;
break;
        }
    }
        if(roundWon)
        {
            statusDisplay.innerHTML=winningMessage();
            gameActive="false";
            return;
        }
        let roundDraw=!gameState.includes("");//true if all 9 cells are occupied
    if(roundDraw)
    {
        statusDisplay.innerHTML=drawMessage();
        gameActive="false";
        return;
    }
    handlePlayerChange();

}
//PART 5 ==> X-O , 0-X;
function handlePlayerChange()
{
    currentPlayer=currentPlayer==="X"?"O":"X";
    statusDisplay,innerHTML=currentPlayerTurn();
}
//part-6; restat the game
function handleRestartGame()
{
gameActive=true;
currentPlayer="X";
gameState=["","" ,"","","","","","",""];
statusDisplay.innerHTML=currentPlayerTurn();   
document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
}