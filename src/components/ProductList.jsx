import '../styles/products.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../slices/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity}));
  };

  const handleQuantity = (pid, qt) => {
   dispatch(updateQuantity({pid, qt}));
   setQuantity(qt);
  }

  const isProductOutOfStock = cartProducts.some(
    (item) => item.id === product.id && item.cartQuantity === product.amount
  );

  return (
    <div className="item-product">
      <img
        src={`https://placehold.co/200x200/cccccc/000000/png?text=${product.name}`}
        alt={product.name}
      />
      <div className="details">
        <span className="name">{product.name}</span>
        <span className="price">${product.price}</span>
      </div>
      <div className="options">
        {!isProductOutOfStock && (
          <input
            type="number"
            value={quantity}
            max={product.amount}
            onChange={(e) => handleQuantity(product.id, parseInt(e.target.value))}
            />
        )}
        <button onClick={handleAddToCart} disabled={isProductOutOfStock}>
          {isProductOutOfStock ? 'Out of stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
