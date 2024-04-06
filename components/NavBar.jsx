import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { Badge } from "@mui/material";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="Navbar">
      <div>
        {" "}
        <Link to={"/"}>
          {" "}
          <h1>My Shopping</h1>{" "}
        </Link>
      </div>
      <div>
        <Badge badgeContent={11} color="primary" className="Badge">
          {" "}
          <Link to={"/Basket"}>
            {" "}
            <FaBasketShopping className="icon" />{" "}
          </Link>
        </Badge>
      </div>{" "}
    </div>
  );
}

export default NavBar;
