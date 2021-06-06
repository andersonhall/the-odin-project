const Header = ({ count, highScore, isPlaying }) => {
  return (
    <header>
      <div>HERO MEMORY</div>
      {isPlaying && <div>Current Score: {count}</div>}
      <div>High Score: {highScore}</div>
    </header>
  );
};

export default Header;
