import { useState } from "react";
import { setToken } from "../api/request";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/user";
import "../css/login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await signup(name, email, password);
      setToken(data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Sign Up</h1>

            {/* Erorr messages will show */}
            {error && <p className="text-danger">{error}</p>}

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <p>Have an account already?</p>
              <button
                className="ghost"
                id="signUp"
                onClick={handleSwitchToLogin}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
