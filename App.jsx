import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

function App() {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let calculatedTotalPrice = basket.reduce((total, basket) => {
      return total + basket.price * basket.amount;
    }, 0);
    setTotalPrice(calculatedTotalPrice);
  }, [basket]);

  const HandleClick = (book) => {
    if (!basket.some((item) => item.id === book.id)) {
      setBasket([...basket, book]);
    }
  };
  const handleDelete = (id) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    if (updatedBasket.length === 0) {
      setTotalPrice(0);
    }
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/Basket"
          element={
            <Basket
              Basket={basket}
              handleDelete={handleDelete}
              totalPrice={totalPrice}
            />
          }
        />
        <Route path="/" element={<Home Handleclick={HandleClick} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
