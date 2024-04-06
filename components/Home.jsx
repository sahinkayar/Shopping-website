import React, { useState } from "react";
import Data from "./Data";
import "../Styles/Main.css";
import "../Styles/Footer.css";
function Home({ Handleclick }) {
  return (
    <div className="Container">
      {Data.map((book) => {
        return (
          <div key={book.id} className="Main">
            <div>
              <img src={book.img} alt="" />
            </div>
            <h4>{book.title}</h4>
            <p>By {book.author}</p>
            <div className="price">{book.price} TL</div>
            <button className="btn-handle" onClick={() => Handleclick(book)}>
              Add to Card
            </button>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Home;
