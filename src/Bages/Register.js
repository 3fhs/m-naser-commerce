import { useState } from "react";
import NavBar from "../componant/NavBar";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);

  function Submit(e) {
    e.preventDefault();
    setAccept(true);
    if (password.length < 6) {
      setFlag(false);
    }
    if (flag === true) {
      let res = axios.post("http://localhost:9000/sign", {
        name: name,
        email: email,
        password: password,
      });

      if (res.states >= 200) {
      } else {
        localStorage.setItem("email", email);
        window.location.pathname = "/";
      }
    }
  }
  return (
    <>
      <div className="back-ground-form">
        <NavBar />
        <div className="center-bage">
          <Form className="form-style" onSubmit={Submit}>
            <h2 className="Form-title">New Register</h2>
            <Form.Group
              className="mb-3 Form-control"
              controlId="formBasicEmail"
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </Form.Group>

            <Form.Group
              className="mb-3 Form-control"
              controlId="formBasicEmail"
            >
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email address</label>
            </Form.Group>

            <Form.Group
              className="mb-3 Form-control"
              controlId="formBasicPassword"
            >
              <input
                type="password"
                placeholder="Password"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password.length < 6 && accept && (
                <p className="wrong">this password is short</p>
              )}
              <label>Password</label>
            </Form.Group>
            <Button className="btn-forms" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
