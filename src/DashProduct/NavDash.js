import { Link } from "react-router-dom";

export default function NavDash(){

    function Handel(){
        window.localStorage.removeItem("email");
        window.location.pathname = "/"
    }

    return(
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dashborad">
                <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-10" style={{justifyContent: "end"}} id="navbarNav">
                            <ul className="navbar-nav">
                                {window.localStorage.getItem("email") ?  (
                                    <li className="nav-item">
                                        <Link className="nav-link color-link" to="/" onClick={Handel}><i class="fa-solid fa-house"></i> Home</Link>
                                    </li>) : (<>
                                    <li className="nav-item">
                                        <Link className="nav-link color-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link color-link" to="/login">LogIn</Link>
                                    </li>
                                    </>)
                                }
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}