import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

function Navbar({ cartItemCount }) {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light flex nav-container">
        <div className="rend">
          <div className="carticon d-flex justify-content-center aling-items-center">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h3 className="ofc-txt">Food On Click</h3>
            </Link>
            <div className=" rendich d-flex justify-content-center aling-items-center ">
              {/* {props.cartItem.length} */}
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                {cartItemCount}
                <MdShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
