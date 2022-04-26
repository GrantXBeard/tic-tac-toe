var currentPlayer = document.querySelector("h1");
var spaces = document.querySelectorAll(".box");
var boxes = document.querySelectorAll("[id=box]");
var domBoard = document.querySelector(".game-grid");
var player1Display = document.querySelector(".player-one");
var player2Display = document.querySelector(".player-two");

window.onLoad = startGame();

function startGame() {
  createNewGame();
  updateMessage(`It's now ${game.currentPlayer.name}'s turn`);
}

function createNewGame() {
  var x = `<img class="icon" src="./assets/x.svg" />`;
  var o = `<img class="icon" src="./assets/o.svg" />`;
  var player1 = createNewPlayer("player1", "X", x);
  var player2 = createNewPlayer("player2", "O", o);
  game = new Game(player1, player2);
  game.decideFirstTurn();
  claimSpace(game);
}

function claimSpace(game) {
  for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", function () {
      game.makeMove(i, game.currentPlayer, domBoard);
      game.changePlayer();
      updateMessage(`It's now ${game.currentPlayer.name}'s turn`);
      checkGameStatus(game);
    });
  }
}

function checkGameStatus(game) {
  var status = game.status;
  if (status === "win") {
    winGame();
  } else if (status === "draw") {
    tieGame();
  }
}

function winGame() {
  updateScores();
  updateMessage(`${game.winner.name} wins!`);
  timeOut();
}

function tieGame() {
  updateMessage(`It's a draw!`);
  timeOut();
}

function updateScores() {
  player1Display.innerText = `${game.player1.wins} wins`;
  player2Display.innerText = `${game.player2.wins} wins`;
}

function createNewPlayer(id, name, token) {
  var newPlayer = new Player(id, name, token);
  return newPlayer;
}

function updateMessage(message) {
  currentPlayer.innerText = message;
}

function timeOut() {
  window.setTimeout(game.resetBoard, 2000);
}
