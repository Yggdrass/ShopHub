import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import font from "./App.module.css";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";

function App() {
  return (
    <div className={font.FamilyQuicksand}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
