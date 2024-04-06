import React, { useState } from "react";
import "../Styles/Basket.css";
function Basket({ Basket, handleDelete, totalPrice }) {
  const [state, setState] = useState(Basket);

  const Increment = (id, price) => {
    const updatedState = state.map((basket) => {
      if (basket.id === id) {
        basket.amount++;
        price = price * basket.amount;
      }

      return basket;
    });
    setState(updatedState);
  };
  const Decrement = (id, price) => {
    const updatedState = state.map((basket) => {
      if (basket.id === id) {
        basket.amount--;
        price = price * basket.amount;
        if (basket.amount === -1) {
          basket.amount++;
        }
      }

      return basket;
    });
    setState(updatedState);
  };

  return (
    <div>
      {Basket.map((basket) => {
        return (
          <div className="Basket" key={basket.id}>
            <div
              className="flex
            "
            >
              <img src={basket.img} alt="" />
              <h3>{basket.title}</h3>{" "}
            </div>
            <div>
              <button onClick={() => Increment(basket.id, basket.price)}>
                +
              </button>
              <span>{basket.amount}</span>
              <button onClick={() => Decrement(basket.id, basket.price)}>
                -
              </button>{" "}
            </div>
            <div>
              <span className="price">{basket.price * basket.amount} TL</span>
              <button onClick={() => handleDelete(basket.id)}>
                Remove
              </button>{" "}
            </div>
          </div>
        );
      })}{" "}
      <div>
        <h1>Total Price:{totalPrice}</h1>
      </div>
    </div>
  );
}

export default Basket;
