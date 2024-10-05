  import { useState, useEffect } from 'react';

  function Timer({ isActive, initialTime, onTimeOut }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
      if (isActive && timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0) {
        onTimeOut();
      }
    }, [isActive, timeLeft, onTimeOut]);

    useEffect(() => {
      setTimeLeft(initialTime); // Her tur değişiminde geri sayımı sıfırla
    }, [initialTime]);

    return (
      <div className="text-xl">
        Süre: {timeLeft}
      </div>
    );
  }

  export default Timer;
