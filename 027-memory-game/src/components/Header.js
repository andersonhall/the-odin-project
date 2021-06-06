const Header = ({ count, highScore, isPlaying }) => {
  return (
    <header>
      <div>Comic Cards Memory Game</div>
      {isPlaying && <div>Current Score: {count}</div>}
      <div>High Score: {highScore}</div>
    </header>
  );
};

export default Header;
