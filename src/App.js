import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import font from "./App.module.css";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartPage, {
  CartItemIcon,
  cartFromLocalStorage,
} from "./pages/CartPage.jsx";
import { createContext, useEffect, useState } from "react";
import ContactPage from "./pages/ContactPage.jsx";
import ContactFormSubmitSuccess from "./pages/ContactFormSubmitSuccess.jsx";

export const CartContext = createContext([]);

function App() {
  const [cart, setCart] = useState([]);
  // Use useEffect to check for localstorage cart, if there is then load that info

  const value = { cart, setCart };
  return (
    <div className={font.FamilyQuicksand}>
      <CartContext.Provider value={<CartItemIcon />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/contactFormSubmitSuccess"
              element={<ContactFormSubmitSuccess />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
