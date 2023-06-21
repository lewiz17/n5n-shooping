import '../styles/products.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updatePurchase, updateQuantity } from '../slices/cartSlice';
import { AddCartIcon, RemoveCartIcon } from './Icons';
import { useTheme } from '../hooks/useTheme';
import { AlertSuccess } from './Elements';

export const Product = ({ product }) => {
  const { themeName } = useTheme();

  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity}));
  };

  const handleRemoveItemCart = (product) => {
    dispatch(removeFromCart(product));
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
        <span className="price">$ {product.price}</span>
      </div>
      <div className={`options ${isProductOutOfStock ? 'no-stock': ''}`}>
        {!isProductOutOfStock && (
          <div className="selqt">
            <strong>Cant:</strong>
            <input
              type="number"
              value={quantity}
              min={1}
              max={product.amount}
              onChange={(e) => handleQuantity(product.id, parseInt(e.target.value))}
              />
            </div>
        )}
        <button onClick={() => {isProductOutOfStock
              ? handleRemoveItemCart(product)
              : handleAddToCart()
          }}>
          {isProductOutOfStock ? <RemoveCartIcon/> : <AddCartIcon theme={themeName}/>}
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

const ProductList = () => {
  const { theme } = useTheme();
  const { products }  = useSelector(state => state.data);
  const { purchaseMade } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [buyMsg, setBuyMsg] = useState('');

  useEffect(() => {
    purchaseMade ? setBuyMsg('Gracias por tu compra!') : setBuyMsg('');
    /** Simulate thank you after purchase */
    setTimeout(() => {
      dispatch(updatePurchase({pmade: false}));
    }, 3000)
  }, [products, dispatch, purchaseMade])

  return (
    <div className="main" style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      { purchaseMade && <AlertSuccess>{buyMsg}</AlertSuccess>}
      <div className="container">
        <div className="products">
          {products.map((product) => (
            product.amount > 0 && <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
