import { useState } from "react";
import { login, setToken } from "../api/login";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/login.css";
function Login({ onLoginSuccess }) {
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
      console.log(email, password);
      const data = await login(email, password);
      setToken(data.token);
      console.log("about to navigate"); // add this
      navigate("/");
      onLoginSuccess(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwithToSignup = () => {
    // const navigate1 = useNavigate();
    navigate("/signup");
    console.log("to signup");
  };
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Sign in</h1>
            {error && <p>{error}</p>}
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
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={handleSwithToSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
