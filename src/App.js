import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";

function App() {
  const [products, getProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);
  const [cartItemCount, updateCartItemCount] = useState(0);
  async function fetchProducts() {
    const itemsData = await axios.get("http://localhost:8080/product/getData");
    const itemsArray = itemsData.data.result;
    getProducts(itemsArray);
  }

  async function fetchCartItems() {
    const cartDataItem = await axios.get(`http://localhost:8080/cart/getData`);
    const cartApiDataArray = cartDataItem.data.result;
    console.log("This is cart API data!!!!!!!!", cartApiDataArray);
    updateCartItems(cartApiDataArray);
  }
  console.log("This is cart API data!!!!!!!! useState", cartItems);
  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, []);
  function countCart() {
    updateCartItemCount(cartItems.length);
  }
  useEffect(() => {
    countCart();
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Navbar cartItemCount={cartItemCount} />
        <Switch>
          <Route path="/" exact>
            <Home products={products} />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={cartItems}
              fetchCartItems={fetchCartItems}
              cartItemCount={cartItemCount}
            />
          </Route>
          <Route path="/Pizza">
            <Pizza products={products} fetchCartItems={fetchCartItems} />
          </Route>
          <Route path="/Burger">
            <Burger products={products} fetchCartItems={fetchCartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
