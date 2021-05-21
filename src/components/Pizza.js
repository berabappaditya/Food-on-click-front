import React from "react";
import axios from "axios";

function pizza({ products, fetchCartItems }) {
  const pizzaDetails = products[0];
  const pizzaSubItemsData = pizzaDetails.subItemsData;
  const pizzaArray = pizzaSubItemsData.subItems;
  console.log("This is pizza", pizzaArray);

  async function addItem(item) {
    const sendTask = await axios.post(`http://localhost:8080/cart/postData`, {
      name: item.name,
      image: item.image,
      price: item.price,
      description: item.description,
    });

    console.log(sendTask);
    fetchCartItems();
  }

  function renderProduct() {
    return pizzaArray.map((item) => {
      return (
        <div className="varti-card d-flex row">
          <div className="text-dark col-8 left-card m-0 p-0">
            <div className="p-3">
              <h6 className="ofc-txt">{item.name}</h6>
              <p className="ofc-txt">Price: {item.price}.00</p>
              <p>{item.description}</p>
              <button
                type="submit"
                className="btn btn-outline-danger btn-light mt-3 p-1"
                onClick={() => addItem(item)}
              >
                Add to cart
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
    <div className="pizza-main">
      <div className="exact-center sec-head w-100">
        <h5>{pizzaSubItemsData.name}</h5>
      </div>
      <div className="row justify-content-sm-center">
        <div className="col-8 ver-card-con">{renderProduct()}</div>
      </div>
    </div>
  );
}

export default pizza;
