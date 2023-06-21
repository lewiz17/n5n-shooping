import { render, screen, fireEvent } from '../utils/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cart from "../components/Cart";
import { ThemeProvider } from '../context/theme';

const mockStore = configureStore([]);

describe('Cart', () => {
  test('Renderiza los productos en el carrito correctamente', () => {
    const cartProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 9.99,
        cartQuantity: 2,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 14.99,
        cartQuantity: 1,
      },
    ];
    const cartTotalAmount = 34.97;
    const store = mockStore({
      cart: {
        cartProducts,
        cartTotalAmount,
      },
      data: {
        products: [],
      },
    });

    render(
        <Provider store={store}>
            <ThemeProvider>
                <Cart />
            </ThemeProvider>
        </Provider>
    );

    expect(screen.getByText('Carrito')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$ 34.97')).toBeInTheDocument();
  });

  test('Se limpia el carrito al hacer click en el boton "Limpiar"', () => {
    const store = mockStore({
      cart: {
        cartProducts: [
          {
            id: 1,
            name: 'Product',
            price: 9.99,
            cartQuantity: 2,
          },
        ],
        cartTotalAmount: 19.98,
      },
      data: {
        products: [],
      },
    });

    render(
        <Provider store={store}>
            <ThemeProvider>
                <Cart />
            </ThemeProvider>
        </Provider>
    );

    fireEvent.click(screen.getByText('Limpiar'));

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[1].type).toBe('cart/clearCart');
  });
  test('dispatches the "purchaseProduct" action when "Comprar" button is clicked', () => {
    const cartProducts = [
      {
        id: 1,
        name: 'Product',
        price: 9.99,
        cartQuantity: 2,
      },
    ];
    const store = mockStore({
      cart: {
        cartProducts,
        cartTotalAmount: 19.98,
      },
      data: {
        products: [
          {
            id: 1,
            name: 'Product',
            price: 9.99,
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
            <Cart />
        </ThemeProvider>
      </Provider>
    );

    fireEvent.click(screen.getByText('Comprar'));

    const actions = store.getActions();
    expect(actions).toHaveLength(4);
    expect(actions[1].type).toBe('products/purchaseProduct');
    expect(actions[1].payload).toEqual({
      productId: 1,
      amount: 2,
    });
    expect(actions[2].type).toBe('cart/clearCart');
  });
});