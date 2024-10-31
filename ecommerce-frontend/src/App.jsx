import "./App.css";
import Footer from "./components/LayoutComponents/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/FormComponents/LoginForm";
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
import Order from "./pages/Order";
import CompleteOrder from "./components/OrderComponents/CompleteOrder";
import OrderHistory from "./components/AccountComponents/OrderHistory";
import ProtectedRoute from "./components/LayoutComponents/ProtectedRoute";

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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/complete"
          element={
            <ProtectedRoute>
              <CompleteOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          element={<ProductDetail />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
