const CartProduct = ({ product, addToCart, removeFromCart }) => {
  return (
    <div key={product.id} className='product'>
      <p className='product-name'>{product.name}</p>
      <p>x{product.quantity}</p>
      <p className='product-price-total'>
        ${parseFloat(product.price * product.quantity).toFixed(2)}
      </p>
      <div className='cart-product-btns'>
        <button className='cart-btn' onClick={() => addToCart(product.id)}>
          +
        </button>
        <button className='cart-btn' onClick={() => removeFromCart(product.id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
