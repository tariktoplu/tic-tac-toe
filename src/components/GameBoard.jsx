// src/components/Board.js

import Square from './Square';
import CalcWinner from './CalcWinner';
import { useState } from 'react';
import Timer from './Timer';

function GameBoard() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnTime] = useState(60); 
  
  const winner = CalcWinner(squares);
  const noNulls = squares.every(element => element !== null);

  function handleTimeOut() {
    
  }

  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else if (noNulls) {
    status = 'Draw';
  } else {
    status = `Next is ${XisNext ? 'X' : 'O'}`;
  }

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = XisNext ? "X" : "O";
    
    setSquares(nextSquares);
    setXisNext(!XisNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <div>
        {status}
      </div>

      <Timer
        isActive={XisNext}
        initialTime={turnTime}
        onTimeOut={handleTimeOut}
      />

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <Timer
        isActive={!XisNext}
        initialTime={turnTime}
        onTimeOut={handleTimeOut}
      />

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default GameBoard;
