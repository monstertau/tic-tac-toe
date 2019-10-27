import React from 'react'
class Game extends React.Component {
  isEnd = (board) => {
    // vertical win
    for (let i = 0; i < 3; i++) {
      if (
        board[0 + i] != "" &&
        board[0 + i] == board[3 + i] &&
        board[3 + i] == board[6 + i]
      ) {
        return board[0 + i];
      }
    }
    // horizontal win
    for (let i = 0; i <= 6; i += 3) {
      if (
        board[0 + i] != "" &&
        board[0 + i] == board[1 + i] &&
        board[1 + i] == board[2 + i]
      ) {
        return board[0 + i];
      }
    }
    // main diagonal win
    if (board[0] == board[4] && board[4] == board[8]) {
      return board[0];
    }
    // second diagonal win
    if (board[2] == board[4] && board[4] == board[6]) {
      return board[2];
    }
    // is whole board full?
    for (let i = 0; i < 9; i++) {
      // There's an empty field, we continue the game
      if (board[i] == "") return 0;
    }
    // it's a tie!
    return '.'
  };
}
export default Game;
