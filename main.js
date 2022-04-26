var currentPlayer = document.querySelector("h1");
var spaces = document.querySelectorAll(".box");
var domBoard = document.querySelector(".game-grid");

window.onLoad = startGame();

function startGame() {
  createNewGame();
  updatePlayerTurn(game.currentPlayer.name);
}

function createNewGame() {
  var x = `<img class="icon" src="./assets/x.svg" />`;
  var o = `<img class="icon" src="./assets/o.svg" />`;
  var player1 = createNewPlayer("player1", "X", x);
  var player2 = createNewPlayer("player2", "O", o);
  game = new Game(player1, player2);
  game.firstTurn();
  claimSpace(game);
}

function claimSpace(game) {
  for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", function () {
      game.makeMove(i, game.currentPlayer, domBoard);
      updatePlayerTurn(game.currentPlayer.name);
      game.currentPlayer.makeChoice(event.target.id);
    });
  }
}

function createNewPlayer(id, name, token) {
  var newPlayer = new Player(id, name, token);
  return newPlayer;
}

function updatePlayerTurn(player) {
  currentPlayer.innerText = `It's now ${player}'s turn`;
}

function displayMessage() {
  setTimeOut;
}
