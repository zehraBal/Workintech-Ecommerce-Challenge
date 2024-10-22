import "./App.css";
import Footer from "./components/LayoutComponents/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/FormComponents/LoginForm";
import RegisterForm from "./components/FormComponents/RegisterForm";
import Register from "./pages/Register";
import Header from "./components/LayoutComponents/Header";
import Shop from "./pages/Shop";
import Test from "./pages/Test";
import ProductDetail from "./pages/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setUser } from "./store/Actions/clientActions";
import { useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance
        .get("/verify", {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.data.message === "Not verified") {
            localStorage.removeItem("token");
            delete axiosInstance.defaults.headers.common["Authorization"];
          }
          dispatch(setUser(res.data));
          dispatch(setIsLoggedIn(true));
          const newToken = res.data.token;
          if (newToken) {
            localStorage.setItem("token", newToken);
            axiosInstance.defaults.headers.common["Authorization"] = newToken;
          }
        })

        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          delete axiosInstance.defaults.headers.common["Authorization"];
        });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/pricing" Component={Pricing} />
        <Route exact path="/about" Component={AboutUs} />
        <Route exact path="/team" Component={Team} />
        <Route exact path="/blog" Component={Blog} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/login" Component={LoginForm} />
        <Route exact path="/signup" Component={Register} />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId"
          Component={Shop}
        />
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/test" Component={Test} />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          Component={ProductDetail}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
