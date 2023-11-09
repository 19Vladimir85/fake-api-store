import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Catalog from "./pages/Catalog/Catalog";
import AddProduct from "./pages/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import CardProduct from "./pages/CardProduct/CardProduct";
import Registration from "./pages/Registration/Registration";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import { themeContext } from "./context/ThemeContext";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import { getLSItem } from "./utils/localStorage";
import PrivateRoute from "./utils/router/PrivateRoute";

function App() {
  const [theme, setTheme] = useState("white");
  const [token, setToken] = useState(getLSItem("token"));

  return (
    <UserContext.Provider
      value={{ token, onChangeLogin: (token) => setToken(token) }}
    >
      <themeContext.Provider
        value={{ theme, onChangeTheme: (theme) => setTheme(theme) }}
      >
        <div className={styles.App}>
          <Header />
          <div className={styles.body}>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route
                  path="/addproduct"
                  element={<AddProduct></AddProduct>}
                ></Route>
              </Route>
              <Route path="/" element={<MainPage></MainPage>}></Route>
              <Route path="/main" element={<MainPage></MainPage>}></Route>
              <Route path="/allproducts" element={<Catalog></Catalog>}></Route>
              <Route
                path="/product/:id"
                element={<CardProduct></CardProduct>}
              ></Route>
              <Route
                path="/registration"
                element={<Registration></Registration>}
              ></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </themeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
