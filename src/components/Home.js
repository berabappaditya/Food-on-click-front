import React from "react";
import { Link } from "react-router-dom";

function Home({ products }) {
  function renderProduct() {
    return products.map((item) => {
      return (
        <div className="col-sm-3" key={item._id}>
          <Link to={`/${item.name}`} style={{ textDecoration: "none" }}>
            <div className="sqr-card  mx-5 mt-4">
              <div className="exact-center">
                <img className="card-img" src={item.image} alt={item.name} />
              </div>
              <div className="text-dark text-center exact-center">
                <p className="ofc-txt">{item.name}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }
  return <div className="row justify-content-sm-center">{renderProduct()}</div>;
}

export default Home;
