import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart({ cartItems, fetchCartItems, cartItemCount }) {
  // const [totalPrice, updatetoTalPrice] = useState(0);

  async function deleteItem(item) {
    await axios.delete("http://localhost:8080/cart/deleteData", {
      data: {
        //specially for delete function we have to add data object
        _id: item._id,
      },
    });
    fetchCartItems();
  }

  //counting totalPrice
  // function fetchTotalPrice() {
  //   var tprice = 0;
  //   for (let i = 0; i < cartItems.length; i++) {
  //     let item = cartItems[i];
  //     let itemVal = parseInt(item.price);
  //     tprice = tprice + itemVal;
  //   }
  //   updatetoTalPrice(tprice);
  //   return tprice;
  // }

  async function clearCart() {
    await axios.delete("http://localhost:8080/cart/deleteAll");
    fetchCartItems();
  }

  function renderProduct() {
    return cartItems.map((item) => {
      return (
        <div className="varti-card d-flex row" key={item.id}>
          <div className="text-dark col-8 left-card m-0 p-0">
            <div className="p-3">
              <h6 className="ofc-txt">{item.name}</h6>
              <p className="ofc-txt">Price: {item.price}.00</p>
              <p>{item.description}</p>
              <button
                type="submit"
                className="btn btn-outline-danger btn-light mt-3 p-1"
                onClick={() => deleteItem(item)}
              >
                Remove Item
              </button>
            </div>
          </div>
          <div className="varti-card-sec col-4 m-0 p-0">
            <img className="varti-card-img" src={item.image} alt={item.name} />
          </div>
        </div>
      );
    });
  }

  return (
    <div className="burger-main">
      <div className="exact-center sec-head w-100">
        <h5>Your Cart</h5>
      </div>
      <div className="row justify-content-sm-center">
        <div className="col-8 ver-card-con">{renderProduct()}</div>
      </div>
      <div className="row justify-content-sm-center">
        <div className="col-8">
          <div>
            {cartItemCount === 0 ? (
              <h6>Your Cart is empty. Add some</h6>
            ) : (
              <Link to="/" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-outline-danger btn-light mt-3 p-1"
                  onClick={() => clearCart()}
                >
                  Place Order
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
