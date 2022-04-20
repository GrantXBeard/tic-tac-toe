var currentPlayer = document.querySelector("h1");

function createNewGame() {
  var x = "./assets/x.svg";
  var o = "./assets/o.svg";
  var player1 = createNewPlayer("player1", x);
  var player2 = createNewPlayer("player2", o);
  var game = new Game(player1, player2);
}

function createNewPlayer(name, token) {
  var newPlayer = new Player(name, token);
  return newPlayer;
}
