import { products as initProducts } from './mocks/products.json';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Cart />
      <ProductList products={initProducts} />
    </div>
  )
}

export default App
