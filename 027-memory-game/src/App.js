import './App.css';
import { useState } from 'react';
import data from './data';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const startGame = () => {
    if (!played) {
      setPlayed(true);
    }
    setCount(0);
    const gameOver = document.querySelector('.game-over');
    gameOver.innerHTML = '';
    const url = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}/`;

    Promise.all(data.map(obj => fetch(url + obj.id + `/image`).then(res => res.json())))
      .then(data => {
        data.forEach(character => {
          return setCharacters(characters => [...characters, { ...character, clicked: false }]);
        });
      })
      .catch(err => {
        console.log(err);
      });
    setIsPlaying(true);
  };

  const shuffle = () => {
    let arr = characters;
    let currentIndex = arr.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    setCharacters([...arr]);
  };

  const handleClick = e => {
    const name = e.target.alt;
    const character = characters.find(c => c.name === name);

    if (character.clicked) {
      return endGame();
    } else {
      setCharacters([
        characters.map(obj =>
          obj.id === character.id ? Object.assign(obj, { clicked: true }) : obj
        ),
      ]);
    }
    setCount(count + 1);
    if (count >= highScore) {
      setHighScore(highScore + 1);
    }
    shuffle();
  };

  const endGame = () => {
    setIsPlaying(false);
    const missedCharacters = characters.filter(c => !c.clicked);
    const gameOver = document.querySelector('.game-over');
    gameOver.innerHTML = `
      <div class="msg">
        <p>GAME OVER!</p>
        <p>YOU MISSED THE FOLLOWING:</p>
      </div>
    `;
    missedCharacters.forEach(c => {
      gameOver.innerHTML += `
        <img src=${c.url} alt=${c.name} width=200 />
      `;
    });
    setCharacters([]);
  };

  return (
    <div className='App'>
      <Header count={count} highScore={highScore} isPlaying={isPlaying} />
      {!isPlaying && <button onClick={startGame}>{played ? 'Play Again?' : 'Start Game'}</button>}
      <Cards characters={characters} handleClick={handleClick} />
      <div className='game-over'></div>
    </div>
  );
}

export default App;
