import { useState } from 'react';
import './App.css'
import Square from './square'
import CalcWinner from './CalcWinner';


/* Proje fikri : Klasik tic tac toe yerine joker kullanaılabilen oyun yapılcak
    * oyunda oyuncuların süresi olacak ve belli sayıda jokerleri olacak
    * türk işi xox olabilir tek skorda bitmez oyun 
    * jokerlerden biri alan genişletme olabilir
    * diğer joker rakip yerine kullanma
    * unodaki jokerlerden esinlenilebir
    * karşı oyuncunun x/o sini değiştirme
    * kendi x/0 yerini değiştirme  */

function Board() {

  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = CalcWinner(squares);
  
  const noNulls = squares.every(element => element !== null);

  let status;

  if(winner){
    status =  `Winner is ${winner}`;
  }
  else if (noNulls){
    status = 'Draw';
  }
  else{
    status = `Next is ${XisNext ? 'X' : 'O'}`;
  }

  function handleClick(i){

    if(squares [i] || winner){
      return;
    }

    const nextSquares = squares.slice();
    
    nextSquares[i] =  XisNext ? "X" : "O";
    
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

      <div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Board
