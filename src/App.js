import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    turn: "X",
    winnerFound: false,
    board: Array(9).fill(""),
    marked: 0
  };
  clicked = event => {
    const dataSquare = event.target.dataset.square;
    const tempBoard = [...this.state.board];
    tempBoard[dataSquare] = this.state.turn;

    if (this.state.board[dataSquare] === "" && !this.state.winnerFound) {
      console.log(dataSquare);
      console.log(this.state.board);
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === "X" ? "O" : "X",
        board: tempBoard,
        marked: this.state.marked + 1
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
          <div className="col-3 tic " data-square="0"></div>
          <div className="col-3 tic " data-square="1"></div>
          <div className="col-3 tic " data-square="2"></div>
          <div className="col-3 tic" data-square="3"></div>
          <div className="col-3 tic " data-square="4"></div>
          <div className="col-3 tic " data-square="5"></div>
          <div className="col-3 tic " data-square="6"></div>
          <div className="col-3 tic " data-square="7"></div>
          <div className="col-3 tic " data-square="8"></div>
        </div>
        <button type="button" class="btn btn-secondary">
          Reset Game
        </button>
        {this.state.marked === 9 || this.state.winnerFound ? <div className="Message">Game Ended</div> : null}
      </div>
    );
  }
}

export default App;
