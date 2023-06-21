import { render, screen, userEvent } from '../utils/test-utils';
import { describe, test } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductList, { Product } from '../components/ProductList';
import { ThemeProvider } from '../context/theme';

const mockStore = configureStore([]);

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 9.99,
    amount: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 14.99,
    amount: 2,
  },
];

describe('ProductList', () => {
  test('Renderiza la lista de productos correctamente', () => {
    
    const purchaseMade = false;
    const store = mockStore({
      data: {
        products,
      },
      cart: {
          cartProducts: [],
          purchaseMade
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <ProductList />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    expect(screen.getByText(products[1].name)).toBeInTheDocument();
  });
  
  test('Muestra el mensaje de gracias despues de una compra', () => {
      const purchaseMade = true;
      const store = mockStore({
        data: {
          products,
        },
        cart: {
          cartProducts: [],
          purchaseMade
        },
      });
  
      render(
        <Provider store={store}>
          <ThemeProvider>
            <ProductList />
          </ThemeProvider>
        </Provider>
      );
  
      expect(screen.getByText('Gracias por tu compra!')).toBeInTheDocument();
  });
});
