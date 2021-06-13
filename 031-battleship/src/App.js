import './App.css';
import Header from './components/Header';
import PlayerBoard from './components/PlayerBoard';
import Game from './modules/Game';

import { useState } from 'react';

const App = () => {
  const g = Game();
  g.g1.id = 0;
  g.g2.id = 1;

  const [p1Board] = useState(g.g1);
  const [p2Board, setP2Board] = useState(g.g2);

  const handleClick = (row, col) => {
    if (p2Board.locations[row][col] < 2) {
      g.p1.fireShot(p2Board, [row, col]);
      if (p2Board.locations[row][col] === 2) {
        p2Board.hitCount++;
      }
      setP2Board(p2Board => ({ ...p2Board }));
      g.p2.takeTurn(p1Board);
    }
  };

  return (
    <div className='App'>
      <Header />
      <main className='play-area'>
        {!p2Board.isGameOver() && !p1Board.isGameOver() && (
          <PlayerBoard board={p1Board} handleClick={() => {}} />
        )}
        {!p2Board.isGameOver() && !p1Board.isGameOver() && (
          <PlayerBoard board={p2Board} handleClick={handleClick} />
        )}
        {p2Board.isGameOver() && (
          <div>{p2Board.hitsToWin === p2Board.hitCount && 'Game Over! You Win!'}</div>
        )}
        {p1Board.isGameOver() && (
          <div>{p1Board.hitsToWin === p1Board.hitCount && 'Game Over! You Lose!'}</div>
        )}
      </main>
    </div>
  );
};

export default App;
