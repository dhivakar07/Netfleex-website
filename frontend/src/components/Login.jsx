import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/netfleex-logo.png";
function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [warning, setwarning] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleName = (event) => {
    setemail(event.target.value);
  };
  const handelPassword = (event) => {
    setpass(event.target.value);
  };
  const handleClick = async () => {
    if (!email.trim() && !pass.trim()) {
      setwarning("Email and password are required.");
    } else if (!email.trim()) {
      setwarning("Email cannot be empty.");
    } else if (!pass.trim()) {
      setwarning("Password cannot be empty.");
    } else {
      try {
        setloading(true);
        const response = await axios.post(
          "https://netfleex-website-gf2b.vercel.app/login",
          {
            email: email,
            password: pass,
          },
        );
        if (response.data === true) {
          navigate("/profile");
        } else {
          navigate("/failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        navigate("/failed");
      } finally {
        setloading(false);
      }
    }
  };
  return (
    <>
      <section className="nav_section">
        <div className="logo_img">
          <img src={logo} alt="img" />
        </div>
      </section>
      <section className="login_section">
        <div className="login_box">
          <h1>Enter your info to Login</h1>
          <p>Or get started with a new account.</p>
          <div className="input_container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleName}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handelPassword}
            />
            {warning && (
              <span style={{ color: "red", fontWeight: "400" }}>{warning}</span>
            )}
            <button onClick={handleClick}>
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
