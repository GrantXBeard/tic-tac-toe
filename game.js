class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer;
    this.winner;
    this.status;
    this.gameSquares = [null, null, null, null, null, null, null, null, null];
    this.winningSequence = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
  }

  changePlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  makeMove(boardIndex, player) {
    if (this.gameSquares[boardIndex] === null) {
      this.gameSquares[boardIndex] = player.token;
      this.checkForWin();
    }
  }

  decideFirstTurn() {
    var players = [this.player1, this.player2];
    var randomIndex = Math.floor(Math.random() * players.length);
    this.currentPlayer = players[randomIndex];
  }

  checkForWin() {
    var player = this.currentPlayer.token;
    var gameBoard = this.gameSquares;
    var sequence = this.winningSequence;
    for (var i = 0; i < sequence.length; i++) {
      var winCondition =
        gameBoard[sequence[i][0]] === player &&
        gameBoard[sequence[i][1]] === player &&
        gameBoard[sequence[i][2]] === player;
      if (winCondition) {
        this.currentPlayer.increaseWins();
        this.winner = this.currentPlayer;
        this.status = "win";
      } else if (!gameBoard.includes(null) && winCondition === false) {
        this.status = "draw";
      }
    }
  }

  resetBoard() {
    this.status = undefined;
    this.winner = undefined;
    this.gameSquares = [null, null, null, null, null, null, null, null, null];
  }
}
