const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div key={product.id} className='product box-shadow'>
      <p className='product-name'>{product.name}</p>
      <img src={product.imageUrl} alt={product.name} className='product-image' />
      <p className='product-description'>{product.description}</p>
      <div className='product-controls'>
        <h3>Add to Cart</h3>
        <button className='product-btn plus' onClick={() => addToCart(product.id)}>
          +
        </button>
        <button className='product-btn' onClick={() => removeFromCart(product.id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
