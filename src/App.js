import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import font from "./App.module.css";

function App() {
  return (
    <div className={font.FamilyQuicksand}>
      <Header />
      <div>MAIN</div>
      <Footer />
    </div>
  );
}

export default App;
