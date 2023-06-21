import "./styles/global.scss";
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Header from './components/Header';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
