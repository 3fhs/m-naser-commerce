import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditeProduct() {
  let { editeId } = useParams();

  const [values, setValues] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9000/products/${editeId}`)
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [editeId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/products/${editeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error updating data:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="side-product">
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id-product" className="form-label">
              Id
            </label>
            <input
              type="number"
              className="form-control"
              id="id-product"
              value={values.id}
              name="id"
              placeholder="index"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title-product" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title-product"
              aria-describedby="title"
              value={values.title}
              name="title"
              placeholder="index"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price-product" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price-product"
              value={values.price}
              name="price"
              placeholder="index"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description-product" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description-product"
              aria-describedby="title"
              value={values.description}
              name="description"
              placeholder="index"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category-product" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category-product"
              aria-describedby="title"
              value={values.category}
              name="category"
              placeholder="category"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image-product" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="image-product"
              aria-describedby="title"
              value={values.image}
              name="image"
              placeholder="src"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
