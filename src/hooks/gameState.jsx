import { useState } from 'react';
import CalcWinner from '../components/CalcWinner';

export function useGameState() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || CalcWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = XisNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXisNext(!XisNext);
  }

  return {
    squares,
    XisNext,
    handleClick,
  };
}

export function useGameStatus() {
  const { squares, XisNext } = useGameState();
  const winner = CalcWinner(squares);
  const noNulls = squares.every((element) => element !== null);

  return {
    winner,
    noNulls,
    XisNext,
  };
}
