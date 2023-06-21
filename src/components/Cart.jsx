import '../styles/cart.scss';
import { useEffect, useId, useRef } from "react"
import { CartIcon, CloseIconCart, RemoveCartItem } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, totalCart, updatePurchase } from "../slices/cartSlice";
import { useCartTotalQuantity } from '../hooks/useCartQuantity';
import { useTheme } from '../hooks/useTheme';
import { Button } from './Elements';
import { purchaseProduct } from '../slices/productSlice';

const Cart = () => {

  const cartCheckID = useId();
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const toggleCart = useRef(null);

  const { cartProducts, cartTotalAmount } = useSelector((state) => state.cart);
  const { products }  = useSelector(state => state.data);

  const totalQuantity = useCartTotalQuantity(cartProducts);

  useEffect(() => {
    dispatch(totalCart());
  }, [cartProducts, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItemCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleBuyProducts = () => {
    cartProducts.forEach(cartProduct => {
      const productIndex = products.findIndex(item => item.id === cartProduct.id);
      if (productIndex !== -1) {
        dispatch(purchaseProduct({ productId: cartProduct.id, amount: cartProduct.cartQuantity }));
        dispatch(clearCart());
        toggleCart.current.checked = false;
        dispatch(updatePurchase({pmade: true}));
      }
    });
  }

  return (
    <div className="cart-holder" >
      <label className="cart-toggle" htmlFor={cartCheckID}>
        <CartIcon />
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </label>
      <input id={cartCheckID} type="checkbox" hidden ref={toggleCart}/>
      <div className="cart-wrapper" style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
          
          <h3 className='title'>Carrito
            <span className="close-cart" onClick={() => toggleCart.current.checked = false}><CloseIconCart theme={theme} /></span>
          </h3>
          <div className="items-cart">
            {cartProducts && cartProducts.map(product => (
              <div className="cart-item" key={product.id}>
                <div className="item-info">
                  <span className="caption">
                      <img src={`https://placehold.co/60x60/cccccc/000000/png?text=${product.name}`} alt="" />
                  </span>
                  <div className="details-cart">
                      <span className="name"><strong>{product.name}</strong></span>
                      <div className="qt-hold">
                          <span className="quantity">{product.cartQuantity} x</span>
                          <span className="price"> {product.price}</span>
                      </div>
                  </div>
                </div>
                <div className="actions">
                    <button className="remove-item" onClick={() => handleRemoveItemCart(product)}><RemoveCartItem theme={theme} /></button>
                </div>
              </div>
            ))}
          </div>
          
          {
            cartProducts.length>0 && (
              <>
                <div className="options">
                  <Button onClick={handleClearCart} theme={theme}>Limpiar</Button>
                </div>
                <div className="total">
                  <span className="subtotal"><strong>Subtotal:</strong>$ {cartTotalAmount}</span>
                </div>
                <div className="buy">
                  <Button onClick={handleBuyProducts} className="large" theme={theme}>Comprar</Button>
                </div>
              </>
            )
          }
      </div>
    </div>
  )
}

export default Cart