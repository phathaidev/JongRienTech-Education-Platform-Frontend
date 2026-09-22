import { getToken } from "../api/login";
import Login from "./login";

function HomePage() {
  const token = getToken();
  return token ? <h1>Hello</h1> : <Login />;
}

export default HomePage;
