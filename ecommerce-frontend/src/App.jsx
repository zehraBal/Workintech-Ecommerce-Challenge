import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/pricing" Component={Pricing} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
