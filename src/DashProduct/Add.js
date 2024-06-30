import axios from "axios";
import { useState } from "react";


export default function AddProduct(){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [id, setId] = useState();
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    function Submit(e){
        e.preventDefault();

        axios.post("http://localhost:9000/products", {
            id,
            title,
            price,
            description,
            category,
            image,
        })
        .then((data) => console.log(data))
    }

    return(
        <div className="side-product">
            <div className="add-product">
                <form onSubmit={Submit}>
                    <div className="mb-3">
                        <label htmlFor="id-product" className="form-label">Id</label>
                        <input type="number" className="form-control" id="id-product" value={id} onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title-product" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title-product" aria-describedby="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price-product" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price-product" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description-product" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description-product" aria-describedby="title" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category-product" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category-product" aria-describedby="title" value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image-product" className="form-label">image</label>
                        <input type="text" className="form-control" id="image-product" aria-describedby="title" value={image} onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add product</button>
                </form>
            </div>
        </div>
    )
}