import { Link } from "react-router-dom";

export default function SideDash(){
    
    return(
        <div className="side-conter">
            <ul className="side-icons">
                <li className="active">
                    <Link className="nav-link text-link" to="getproduct">
                        <i className="fa-solid fa-cart-shopping click-pointer"></i>
                        <span>Get All Product</span>
                    </Link>
                </li>
                <li className="">
                    <Link className="nav-link text-link" to="getcategory">
                        <i className="fa-solid fa-cart-plus click-pointer"></i>
                        <span>Get All Category</span>
                    </Link>
                </li>
                <li className="">
                    <Link className="nav-link text-link" to="getallusers">
                        <i className="fa-solid fa-users" style={{fontSize: "25px"}}></i> 
                        <span>All Users</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}