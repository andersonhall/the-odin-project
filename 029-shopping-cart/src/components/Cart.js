const Cart = ({ cart }) => {
  return (
    <section className='cart'>
      <h1>Your Cart</h1>
      <div className='cart-products'>
        {cart.map(product => (
          <div>product</div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
