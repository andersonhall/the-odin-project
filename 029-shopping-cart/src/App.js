import { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Home exact path='/' component={Home} />
          <Shop exact path='/shop' component={Shop} />
          <Cart exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
