import CartProduct from './CartProduct';

const Cart = ({ cart, cartTotal, addToCart, removeFromCart }) => {
  return (
    <section className='cart'>
      <div>
        <h1>Your Cart</h1>
        {cartTotal > 0 && <p>Total: ${parseFloat(cartTotal).toFixed(2)}</p>}
      </div>
      <div className='cart-products box-shadow'>
        {cart.map(product => (
          <CartProduct
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      {cartTotal > 0 && <button>Checkout</button>}
    </section>
  );
};

export default Cart;
