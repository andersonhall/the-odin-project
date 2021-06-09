const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div key={product.id} className='product box-shadow'>
      <p className='product-name'>{product.name}</p>
      <img src={product.imageUrl} alt={product.name} className='product-image' />
      <p className='product-description'>{product.description}</p>
      <p className='product-price'>${product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
