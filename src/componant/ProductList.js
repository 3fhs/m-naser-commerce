import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/slices/Product-slice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToSlice } from "../rtk/slices/Cart-slice";
import { Form } from "react-bootstrap";

export default function ProductList() {
  const selectProduct = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="body-prod pt-5 back-home-color">
      <h2 className="text-center" style={{ color: "#0d6efd" }}>
        All Products in The Store
      </h2>
      <div className="botton-group"></div>
      <div className="container">
        <div className="body-product">
          {selectProduct.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img
                  src={product.image}
                  style={{ height: "300px", padding: "5px" }}
                  className="card-img-top"
                  alt={product.title}
                />
                <div>
                  <span className="price">price : {product.price}$</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#0d6efd" }}>
                    {product.title}
                  </h5>
                  <span>{product.category}</span>
                  <p className="card-text">
                    {product.description.slice(0, 250)} ...
                  </p>
                </div>
                <div className="cart-bottom">
                  <Link
                    to={`productdetails/${product.id}`}
                    className="btn btn-primary"
                  >
                    {" "}
                    Details{" "}
                  </Link>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToSlice(product))}
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
