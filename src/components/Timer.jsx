import { useState, useEffect } from 'react';

function Timer({ player }) {
  const [timeLeft, setTimeLeft] = useState(60); // Başlangıç süresi 60sn
  const [isActive, setIsActive] = useState(player === 'X'); // İlk oyuncu X olsun

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeOut();
    }
  }, [isActive, timeLeft]);

  function handleTimeOut() {
    setIsActive(false); // Süre dolduğunda diğer oyuncuya geç
  }

  function resetTimer() {
    setTimeLeft(60); // Zamanı sıfırla
    setIsActive(player === 'X'); // Oyuncuyu baştan ayarla
  }

  return (
    <div>
      <div className="text-xl">Süre: {timeLeft}</div>
      <button onClick={resetTimer} className="bg-blue-500 text-white mt-2 p-1 rounded">
        Süreyi Sıfırla
      </button>
    </div>
  );
}

export default Timer;
