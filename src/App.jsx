import GameBoard from './components/GameBoard';

function Board() {

  return (
    <div>
      <div className="flex justify-between items-center w-full mt-8">
        {/* Sol Menü - Oyuncu X */}
        <div className="w-40 p-4 border border-gray-300 rounded-lg text-center">
          <h2 className="text-lg font-bold">Oyuncu X</h2>
           {/* X aktifse isActive true */}
        </div>

        {/* Oyun alanı */}
        <div className="grid grid-cols-3 gap-4">
          <GameBoard/>
        </div>

        {/* Sağ Menü - Oyuncu O */}
        <div className="w-40 p-4 border border-gray-300 rounded-lg text-center">
          <h2 className="text-lg font-bold">Oyuncu O</h2>
          {/* O'nun sırasıysa isActive true */}
        </div>
      </div>
      </div>
  );
}

export default Board;
