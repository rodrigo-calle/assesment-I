import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Product from './components/product/Product';
import About from './components/about/About';
import NavBar from './components/navBar/NavBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products-detail" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
