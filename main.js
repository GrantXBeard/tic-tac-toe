var currentPlayer = document.querySelector("h1");
var spaces = document.querySelectorAll(".box");

window.onLoad = playGame();

function playGame() {
  createNewGame();
  updatePlayerTurn(game.currentPlayer.name);
}

function createNewGame() {
  var x = "./assets/x.svg";
  var o = "./assets/o.svg";
  var player1 = createNewPlayer("player1", "X", x);
  var player2 = createNewPlayer("player2", "O", o);
  game = new Game(player1, player2);
  game.firstTurn();
}

function createNewPlayer(id, name, token) {
  var newPlayer = new Player(id, name, token);
  return newPlayer;
}

function updatePlayerTurn(player) {
  currentPlayer.innerText = `It's now ${player}'s turn`;
}
