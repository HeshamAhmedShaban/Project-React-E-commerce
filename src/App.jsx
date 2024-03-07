import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Auth from './Pages/Auth/Auth';
import Footer from './Components/Footer/Footer';


import menBanner from './Components/Assets/banner_mens.png'
import womenBanner from './Components/Assets/banner_women.png'
import kidsBanner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={menBanner} category='men' />} />
        <Route path="/woman" element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kid" />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
