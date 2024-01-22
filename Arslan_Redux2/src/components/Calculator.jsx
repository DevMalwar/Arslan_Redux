import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [currentOperation, setCurrentOperation] = useState('');
  const [audio, setAudio] = useState(new Audio('music/dvrst_monrxe_darling.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const operations = {
    сложение: (prev, current) => prev + current,
    вычитание: (prev, current) => prev - current,
    умножение: (prev, current) => prev * current,
    деление: (prev, current) => prev / current,
  };

  const handleOperation = (operation) => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      const prevValue = history.length > 0 ? history[history.length - 1] : 0;
      const result = operations[operation](prevValue, number);
      setHistory([...history, result]);
      setInputValue('');
      setCurrentOperation(operation);
    }
  };

  const handleClear = () => {
    setHistory([]);
    setInputValue('');
    setCurrentOperation('');
    playAudio();
  };

  const playAudio = () => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    audio.volume = e.target.value;
  };

  return (
    <div className="calculator-container">
      <div className="calculator" style={{ backgroundImage: 'url(images/watch_dogs2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ marginBottom: '10px', height: 'calc(10px + 10px)', backgroundColor: '#1E88E5', color: '#61dafb', borderRadius: '5px', width: '100px', paddingLeft: '10px' }} />
        <div className="operation-buttons" style={{ display: 'flex', flexDirection: 'row' }}>
          <button onClick={() => handleOperation('сложение')}>Сложение</button>
          <button onClick={() => handleOperation('вычитание')}>Вычитание</button>
          <button onClick={() => handleOperation('умножение')}>Умножение</button>
          <button onClick={() => handleOperation('деление')}>Деление</button>
        </div>
        <button className="clear-button" onClick={handleClear} style={{ marginTop: '10px' }}>Очистить</button>

        <div className="result" style={{ marginTop: '15px', color: '#61dafb' }}>
          <h2>История:</h2>
          {history.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          {currentOperation && (
            <div>Текущая операция: {currentOperation}</div>
          )}
        </div>

        <div className="audio-controls" style={{ marginTop: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <button className="play-pause-button" onClick={playAudio} style={{ marginRight: '10px' }}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <label htmlFor="volume" style={{ marginRight: '10px', color: '#61dafb' }}>Громкость:</label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="0.5"
            onChange={handleVolumeChange}
            style={{ marginLeft: '-5px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
