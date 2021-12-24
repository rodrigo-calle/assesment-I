import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import ProductDetail from './components/productDetail/ProductDetail';
import About from './components/about/About';
import NavBar from './components/navBar/NavBar';
import { ProductProvider } from './context/ProductContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Outlet />
        </ProductProvider>
      </BrowserRouter>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
