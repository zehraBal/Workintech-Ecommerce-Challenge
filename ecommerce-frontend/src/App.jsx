import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import HeaderNav from "./components/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/pricing" Component={Pricing} />
        <Route exact path="/about" Component={AboutUs} />
        <Route exact path="/team" Component={Team} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
