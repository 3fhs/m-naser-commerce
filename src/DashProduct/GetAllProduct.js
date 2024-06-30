import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Form } from "react-bootstrap";

export default function GetAllProduct(){

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');

    console.log(search)

    useEffect(() => {
        allProduct();
    }, [])

    const allProduct = () => {
        fetch("http://localhost:9000/products")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }

    const deletId = (product) => {
        Swal.fire({
            title: `are you sure to need delete this product ${product.title} ?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){

                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then((data) => {allProduct()})
            }
        })
    }

    return(
        <div className="side-product">
            <div className="input-head">
                <Link to="/Dash/getproduct/add" type="button" className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> 
                    <span>Add Product</span>
                </Link>
                <Form>
                    <Form.Group>
                        <Form.Control className="input-search" type="search" placeholder="search" 
                                onChange={(e) => setSearch(e.target.value)}/>
                    </Form.Group>
                </Form>
            </div>
            <table className="table text-center mt-2">
                <thead>
                    <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th className="img-product" scope="col">Image</th>
                    <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    { product.filter((product) => {
                        return search === '' ? product : product.title.includes(search);
                    }).map((product, index) => {
                        return(
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.title.slice(0, 20)} ...</td>
                                <td>{product.price}</td>
                                <td className="img-product">{product.image.slice(0,20)} ...</td>
                                <td style={{display: "flex",
                                            flexDirection: "column",
                                            gap: "5px"}}>
                                    <i className="fa-solid fa-trash" style={{fontSize:"25px", color:"red",cursor:"pointer",margin: "0px 5px"}} onClick={() => deletId(product)} ></i>
                                    <Link to={`/Dash/getproduct/view/${product.id}`}><i className="fa-solid fa-eye" style={{fontSize:"25px",cursor:"pointer",margin: "0px 5px"}}></i></Link>
                                    <Link to={`/Dash/getproduct/edite/${product.id}`}><i className="fa-solid fa-pen-to-square" style={{fontSize:"25px", color:"#0d6efd",cursor:"pointer", margin: "0px 5px"}}></i></Link>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}