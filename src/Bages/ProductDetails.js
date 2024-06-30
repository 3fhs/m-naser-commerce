import NavBar from "../componant/NavBar";
import { useEffect, useState } from "react";
import Footer from "../componant/Footer";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });

  return (
    <div className="details">
      <NavBar />
      <div className="product-details">
        <div className="container product-data" key={product.id}>
          <img
            src={product.image}
            className="product-data-img"
            alt={product.title}
          />
          <div className="details-body">
            <h2>{product.title}</h2>
            <span>price: {product.price}$</span>
            <p>{product.description}</p>
            <Link className="btn btn-primary" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
