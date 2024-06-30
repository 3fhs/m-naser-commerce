import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function SideUsers(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        allCategory();
    }, [])

    const allCategory = () => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }

    const deletId = (category) => {
        Swal.fire({
            title: `are you sure to need delete this product ${product.title} ?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                fetch(`https://fakestoreapi.com/products/categories/${product.id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then((data) => {allCategory()})
            }
        })
        
    }

    return(
        <div className="side-product">
            <Link to="/Dash/getproduct/add" type="button" className="btn btn-primary btn-lg"><i className="fa-solid fa-plus"></i> Add category</Link>
            <table className="table text-center mt-2">
                <thead>
                    <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    { product.map((product, index) => {

                        return(
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.image}</td>
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