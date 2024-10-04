import Square from './square';
import Timer from './Timer';
import './App.css';

function Board() {
  return (
    <div>
      <div className="text-center text-xl mb-4">
        {/* Oyunun durumu */}
        <GameStatus />
      </div>

      <div className="flex justify-between items-center w-full mt-8">
        {/* Sol Menü - Oyuncu X */}
        <div className="w-40 p-4 border border-gray-300 rounded-lg text-center">
          <h2 className="text-lg font-bold">Oyuncu X</h2>
          <Timer player="X" />
        </div>

        {/* Oyun alanı */}
        <div className="grid grid-cols-3 gap-4">
          <GameBoard />
        </div>

        {/* Sağ Menü - Oyuncu O */}
        <div className="w-40 p-4 border border-gray-300 rounded-lg text-center">
          <h2 className="text-lg font-bold">Oyuncu O</h2>
          <Timer player="O" />
        </div>
      </div>

      <div className="text-center mt-4">
        <ResetButton />
      </div>
    </div>
  );
}

export default Board;
