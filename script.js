let createPlayer = () => {
  for (let i = 0; i < 4; i++) {
    if (gameBoardModule.playerArray.length >= 6) {
      gameBoardModule.makePlayerMove();
      break;
    } else if (gameBoardModule.playerArray.length == 0) {
      let playerName = prompt("enter player name");
      if (playerName == "" || playerName == null) {
        alert("name cannpt be blank");
        continue;
      }

      let playerNumber = 1;
      let assignedXO = "x";
      alert("you are player 1 and X");
      gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
    } else if (gameBoardModule.playerArray.length != 0) {
      let playerName = prompt("enter player name");
      if (playerName == "" || playerName == null) {
        alert("name cannpt be blank");
        continue;
      }
      let playerNumber = 2;
      let assignedXO = "o";
      alert("you are player 2 and O");
      gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
    }
  }
};

let gameBoardModule = (() => {
  let gameBoard = [];
  let playerArray = [];

  let makePlayerMove = ()=>{
    if(playerArray.length==6 && gameBoard.length<9){

        if(gameBoard.length == 0){
            alert('player 1 make your move');
            gameBoard.push(playerArray[2]);
            console.log('show me current gameboard',gameBoard);
        } else if(gameBoard[gameBoard.length-1]=='x'){
            gameBoard.push(playerArray[5]);
            console.log("show me current gameboard", gameBoard);

        } else if(gameBoard[gameBoard.length-1]=='o'){
            gameBoard.push(playerArray[2]);
            console.log("show me current gameboard", gameBoard);

        }

    }
    // winner();
  }
  return { gameBoard, playerArray, makePlayerMove };
})();

let displayControllerModule = (() => {
  const makeMove = document.querySelectorAll(".btn");

  let index = 0;
  makeMove.forEach((makeMoves) => {
    makeMoves.dataset.linkedButton = index;
    makeMoves.addEventListener("click", renderArrayToScreen);

    function renderArrayToScreen() {
      index = 0;
      const gridBoxes = document.querySelectorAll(".grid-box");
      gridBoxes.forEach((gridBox) => {
        gridBox.dataset.linkedButton = index;
        if (
          gridBox.getAttribute("data-linked-button") ==
          makeMoves.getAttribute("data-linked-button")
        ) {
          gridBox.textContent =
            gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
        }
        index++;
    });
    
    gameBoardModule.makePlayerMove();
}
index++;
return {};
});
const start = document.querySelector('.start');
start.addEventListener('click',createPlayer);


})();

// function winner(){
//      let ret =displayControllerModule();
//      if(ret[0].textContent==ret[1].textContent==ret[2].textContent){
//         alert('wins')
//      }
// }