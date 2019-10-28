import React from "react";
class Game extends React.Component {
  max = board => {
    let maxv = -2;
    let pos;
    let result = this.isEnd(board);
    // console.log(result);
    if (result === "X") {
      return [-1, 0];
    } else if (result === "O") {
      return [1, 0];
    } else if (result === ".") {
      return [0, 0];
    }
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let [m, mini] = this.min(board);
        if (m > maxv) {
          maxv = m;
          pos = i;
          
        }
        board[i] = "";
      }
    }
    return [maxv, pos];
  };
  min = board => {
    let minv = 2;
    let pos;
    const result = this.isEnd(board);
    if (result === "X") {
      return [-1, 0];
    } else if (result === "O") {
      return [1, 0];
    } else if (result === ".") {
      return [0, 0];
    }
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let [m, maxi] = this.max(board);
        if (m < minv) {
          minv = m;
          pos = i;
        }
        board[i] = "";
      }
    }
    return [minv, pos];
  };

  isEnd = board => {
    // vertical win
    for (let i = 0; i < 3; i++) {
      if (
        board[0 + i] !== "" &&
        board[0 + i] === board[3 + i] &&
        board[3 + i] === board[6 + i]
      ) {
        return board[0 + i];
      }
    }
    // horizontal win
    for (let i = 0; i <= 6; i += 3) {
      if (
        board[0 + i] !== "" &&
        board[0 + i] === board[1 + i] &&
        board[1 + i] === board[2 + i]
      ) {
        return board[0 + i];
      }
    }
    // main diagonal win
    if (board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    // second diagonal win
    if (board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }
    // is whole board full?
    for (let i = 0; i < 9; i++) {
      // There's an empty field, we continue the game
      if (board[i] === "") return 0;
    }
    // it's a tie!
    return ".";
  };
}
export default Game;
