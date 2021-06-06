const Cards = ({ characters, handleClick }) => {
  return (
    <main className='cards'>
      {characters.map(character => {
        return (
          <img
            src={character.url}
            alt={character.name}
            key={character.name}
            width='200'
            onClick={handleClick}
          />
        );
      })}
    </main>
  );
};

export default Cards;
