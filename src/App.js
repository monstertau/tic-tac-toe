import React from "react";
import "./App.css";
import Game from "./Game/Game";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.board = Array(9).fill("");
    this.state = {
      turn: "X",
      gameEnded: false,
      result: "",
      board: Array(9).fill("")
    };
  }
  game = new Game();
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.turn != prevState.turn ||
      this.state.result != prevState.result
    ) {
      this.checkWinner();
    }
  }
  reset = event => {
    this.setState({
      turn: "X",
      gameEnded: false,
      result: ""
    });
    this.board = Array(9).fill("");
  };

  clicked = event => {
    console.log(this.state);

    const dataSquare = event.target.dataset.square;
    if (this.board[dataSquare] === "" && !this.state.gameEnded) {
      this.setState({
        turn: this.state.turn === "X" ? "O" : "X"
      });
      this.board[dataSquare] = this.state.turn;
    }
  };

  checkWinner = () => {
    console.log(this.board);
    const result = this.game.isEnd(this.board);
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
    if (this.state.turn == "X") {
      let [m, pos1] = this.game.min(this.board);
      console.log("x value: " + m + " pos: " + pos1);
    } else if (this.state.turn == "O") {
      let [m, pos2] = this.game.max(this.board);
      this.setState({
        turn: "X"
      });
      this.board[pos2] = "O";
      console.log("o value: " + m + " pos: " + pos2);
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
            {this.board[0]}
          </div>
          <div className="col-3 tic " data-square="1">
            {this.board[1]}
          </div>
          <div className="col-3 tic " data-square="2">
            {this.board[2]}
          </div>
          <div className="col-3 tic" data-square="3">
            {this.board[3]}
          </div>
          <div className="col-3 tic " data-square="4">
            {this.board[4]}
          </div>
          <div className="col-3 tic " data-square="5">
            {this.board[5]}
          </div>
          <div className="col-3 tic " data-square="6">
            {this.board[6]}
          </div>
          <div className="col-3 tic " data-square="7">
            {this.board[7]}
          </div>
          <div className="col-3 tic " data-square="8">
            {this.board[8]}
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={event => this.reset(event)}
        >
          Reset Game
        </button>
        {this.state.gameEnded ? (
          <div>{this.state.result}</div>
        ) : (
          <div>Its {this.state.turn} Turn</div>
        )}
      </div>
    );
  }
}

export default App;
