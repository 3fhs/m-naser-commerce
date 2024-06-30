import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);

  function Handel() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }

  return (
    <div className="nav-bar-fixed">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div>
            <span className="navbar-brand logo" to="/">
              HOOR<i className="bi bi-plus-lg"></i>STORE
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ justifyContent: "space-between" }}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dash">
                  DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shopping">
                  Shopping{" "}
                  <span className="shopping-number">{cart.length}</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {window.localStorage.getItem("email") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={Handel}>
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      LogIn
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
