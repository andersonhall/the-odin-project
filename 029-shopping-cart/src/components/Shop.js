import Cart from './Cart';
import Product from './Product';

const Shop = ({ products, cart, cartTotal, addToCart, removeFromCart }) => {
  return (
    <div className='shop'>
      <div className='shop-left'>
        <h1>Top Skincare Products</h1>
        <section className='shop-items'>
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      </div>
      <Cart
        cart={cart}
        cartTotal={cartTotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Shop;
