import Square from './square';
import { useGameState } from './gameState';

function GameBoard() {
  const { squares, handleClick } = useGameState();

  return (
    <>
      {squares.map((square, i) => (
        <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
      ))}
    </>
  );
}

export default GameBoard;
