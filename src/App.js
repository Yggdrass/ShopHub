import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import font from "./App.module.css";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className={font.FamilyQuicksand}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
