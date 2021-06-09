import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import productData from './data';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = id => {
    console.log('add', id);
  };

  const removeFromCart = id => {
    console.log('remove', id);
  };

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Home exact path='/' component={Home} />
          <Shop
            exact
            path='/shop'
            component={Shop}
            products={products}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
