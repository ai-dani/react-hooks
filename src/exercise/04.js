import { useState } from "react";

const Board = () => {

  // set board initially as null
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("x"); // "x" or "o"
  const [status, setStatus] = useState("");

  const handleSquareClick = (e) => {
    const currentSquareIndex = Number(e.target.value);
    const updatedBoard = [...board];
    if (updatedBoard[currentSquareIndex] === null) {
      updatedBoard[currentSquareIndex] = currentPlayer;
      setBoard(updatedBoard);
      checkWinner(updatedBoard);
      if (currentPlayer === "x") {
        setCurrentPlayer("o");
      } else {
        setCurrentPlayer("x");
      }
    } else {
      console.log("YOU CANT PICK THIS");
    }
  };

  const checkWinner = (updatedBoard) => {
    console.log(updatedBoard);
    let winnerFound = false;
    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    // some logic to check if there is a win and WHO WON (return x or o or none)
    // example input: [x,x,o,o,x,o,o,o,o]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        winnerFound = true;
      }
    }

    if (winnerFound) {
      setStatus(`${currentPlayer} won.`);
    }
  };

  const handleRestart = () => {
    const updatedBoard = board.map((square) => null);
    setBoard(updatedBoard);
    setStatus("");
  };

  return (
    <div className="game">
      <div className="game-board">
        <div>
          {status ? (
            <div className="status">{status}</div>
          ) : (
            <div className="status">Next player: {currentPlayer}</div>
          )}

          <div className="board-row">
            <button value="0" className="square" onClick={handleSquareClick}>
              {board[0]}
            </button>
            <button value="1" className="square" onClick={handleSquareClick}>
              {board[1]}
            </button>
            <button value="2" className="square" onClick={handleSquareClick}>
              {board[2]}
            </button>
          </div>
          <div className="board-row">
            <button value="3" className="square" onClick={handleSquareClick}>
              {board[3]}
            </button>
            <button value="4" className="square" onClick={handleSquareClick}>
              {board[4]}
            </button>
            <button value="5" className="square" onClick={handleSquareClick}>
              {board[5]}
            </button>
          </div>
          <div className="board-row">
            <button value="6" className="square" onClick={handleSquareClick}>
              {board[6]}
            </button>
            <button value="7" className="square" onClick={handleSquareClick}>
              {board[7]}
            </button>
            <button value="8" className="square" onClick={handleSquareClick}>
              {board[8]}
            </button>
          </div>
        </div>
        <button className="restart" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Board;
