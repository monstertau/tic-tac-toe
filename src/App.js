import React from "react";
import "./App.css";
import Game from "./Game/Game";
class App extends React.Component {
  state = {
    turn: "X",
    gameEnded: false,
    result: "",
    board: Array(9).fill("")
  };
  game = new Game();

  reset = event => {
    this.setState({
      turn: "X",
      gameEnded: false,
      result: "",
      board: Array(9).fill("")
    });
  };

  clicked = event => {
    console.log(this.state);
    const dataSquare = event.target.dataset.square;
    const tempBoard = [...this.state.board];
    tempBoard[dataSquare] = this.state.turn;
    if (this.state.board[dataSquare] === "" && !this.state.gameEnded) {
      this.setState(
        {
          turn: this.state.turn === "X" ? "O" : "X",
          board: tempBoard
        },
        function() {
          this.checkWinner();
        }
      );
    }
  };

  checkWinner = () => {
    const result = this.game.isEnd(this.state.board);
    if (result == "X" || result == "O") {
      this.setState({
        result: "The winner is " + result,
        gameEnded: true
      });
    } else if (result == ".") {
      this.setState({
        result: "The game is draw",
        gameEnded: true
      });
    }
  };

  render() {
    return (
      <div className="text-center box container mt-5">
        <h1>Play Tic Tac Toe</h1>
        <div
          className="mt-5 row boardGame"
          onClick={event => this.clicked(event)}
        >
          <div className="col-3 tic " data-square="0">
            {this.state.board[0]}
          </div>
          <div className="col-3 tic " data-square="1">
            {this.state.board[1]}
          </div>
          <div className="col-3 tic " data-square="2">
            {this.state.board[2]}
          </div>
          <div className="col-3 tic" data-square="3">
            {this.state.board[3]}
          </div>
          <div className="col-3 tic " data-square="4">
            {this.state.board[4]}
          </div>
          <div className="col-3 tic " data-square="5">
            {this.state.board[5]}
          </div>
          <div className="col-3 tic " data-square="6">
            {this.state.board[6]}
          </div>
          <div className="col-3 tic " data-square="7">
            {this.state.board[7]}
          </div>
          <div className="col-3 tic " data-square="8">
            {this.state.board[8]}
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={event => this.reset(event)}
        >
          Reset Game
        </button>
        {this.state.gameEnded ? <div>{this.state.result}</div> : <div>Its {this.state.turn} Turn</div>}
      </div>
    );
  }
}

export default App;
