import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Catalog from "./pages/Catalog/Catalog";
import AddProduct from "./pages/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import Electronics from "./pages/Electronics/Electronics";
import Jewelery from "./pages/Jewelery/Jewelery";
import MensClothing from "./pages/MensClothing/MensClothing";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import CardProduct from "./pages/CardProduct/CardProduct";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/main" element={<MainPage></MainPage>}></Route>
          <Route path="/allproducts" element={<Catalog></Catalog>}></Route>
          <Route
            path="/electronics"
            element={<Electronics></Electronics>}
          ></Route>
          <Route path="/jewelery" element={<Jewelery></Jewelery>}></Route>
          <Route
            path="/mensclothing"
            element={<MensClothing></MensClothing>}
          ></Route>
          <Route
            path="/womensclothing"
            element={<WomensClothing></WomensClothing>}
          ></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="/product/:id"
            element={<CardProduct></CardProduct>}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
