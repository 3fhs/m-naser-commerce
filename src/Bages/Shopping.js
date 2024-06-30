import { useDispatch, useSelector } from "react-redux"
import { clear, deleteFromcart } from "../rtk/slices/Cart-slice";
import NavBar from "../componant/NavBar";
import Footer from "../componant/Footer";
import { Button, Container } from "react-bootstrap";

export default function Shopping() {

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)

    return (
        <div>
            <NavBar/>
            <div className="shopping-list">
                <Container>
                    <Button onClick={() => dispatch(clear())}>Clear All</Button>
                    
                    <table className="table text-center mt-2">
                        <thead>
                            <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="Quantity">Quantity</th>
                            <th className="img-product" scope="col">Image</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.map((product, index) => {
                                return(
                                    <tr key={product.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.title}</td>
                                        <td>{product.price} $</td>
                                        <td className="Quantity">{product.quantity}</td>
                                        <td className="img-shopping"><img className="img-shopping" src={product.image}/></td>
                                        <td>
                                            <i className="fa-solid fa-trash" style={{fontSize:"25px", color:"red",cursor:"pointer",margin: "0px 5px"}} 
                                                onClick={() => dispatch(deleteFromcart(product))}><span className="shopping-delete" style={{fontSize:"25px", color:"red",cursor:"pointer",margin: "0px 5px"}}>Delete</span></i>
                                        </td>
                                    </tr>
                                )
                            }) }
                            <tr className="tottal">
                                <td colSpan={6}>Tottal : {totalPrice}$</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}