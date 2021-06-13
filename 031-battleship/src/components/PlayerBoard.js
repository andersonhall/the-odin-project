const PlayerBoard = ({ board, handleClick }) => {
  const { id } = board;
  return (
    <div className='player-board' key={id}>
      {board.locations.map((row, index) => {
        return (
          <div key={index} className='row'>
            {row.map((col, i) => {
              return (
                <div
                  onClick={() => handleClick(index, i)}
                  key={i}
                  className={
                    col === 1 && id === 0
                      ? 'ship square'
                      : col === 0
                      ? 'water square'
                      : col === 2
                      ? 'hit square'
                      : col === 3
                      ? 'miss square'
                      : 'water square'
                  }
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default PlayerBoard;
