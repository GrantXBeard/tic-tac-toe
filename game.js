class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer;
    this.winner;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.winningSequence = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  firstTurn() {
    var players = [this.player1, this.player2];
    var randomIndex = Math.floor(Math.random() * players.length);
    this.currentPlayer = players[randomIndex];
  }
}
