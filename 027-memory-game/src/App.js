import './App.css';

function App() {
  const apiURL = `https://www.superheroapi.com/api/${process.env.REACT_APP_API_KEY}/71`;

  const fetchData = () => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className='App'>
      <button onClick={fetchData}>CLICK</button>
    </div>
  );
}

export default App;
