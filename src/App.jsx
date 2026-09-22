// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; // correct
import HomePage from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">About</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
