import { useGameStatus } from './gameState';

function GameStatus() {
  const { winner, noNulls, XisNext } = useGameStatus();

  if (winner) {
    return `Kazanan: ${winner}`;
  } else if (noNulls) {
    return 'Berabere';
  } else {
    return `Sıradaki: ${XisNext ? 'X' : 'O'}`;
  }
}

export default GameStatus;
