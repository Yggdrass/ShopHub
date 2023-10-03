import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import font from "./App.module.css";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={font.FamilyQuicksand}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
