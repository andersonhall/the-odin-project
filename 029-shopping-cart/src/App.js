import { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import productData from './data';

function App() {
  const products = productData;
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = id => {
    if (!cart.find(product => product.id === id)) {
      const productToAdd = products.find(product => product.id === id);
      setCart(cart => [...cart, { ...productToAdd, quantity: 1 }]);
      setCartTotal(cartTotal + productToAdd.price);
    } else {
      const productToIncrement = cart.find(product => product.id === id);
      setCart([
        ...cart.map(obj =>
          obj.id === productToIncrement.id
            ? Object.assign(obj, { quantity: obj.quantity + 1 })
            : obj
        ),
      ]);
      setCartTotal(cartTotal + productToIncrement.price);
    }
  };

  const removeFromCart = id => {
    const productToRemove = cart.find(product => product.id === id);
    if (productToRemove.quantity === 1) {
      const newCart = cart.filter(product => product.id !== id);
      setCart(newCart);
      setCartTotal(cartTotal - productToRemove.price);
    } else {
      setCart([
        ...cart.map(obj =>
          obj.id === productToRemove.id ? Object.assign(obj, { quantity: obj.quantity - 1 }) : obj
        ),
      ]);
      setCartTotal(cartTotal - productToRemove.price);
    }
  };

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
            cartTotal={cartTotal}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
