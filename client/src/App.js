import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// to get the code from url
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return <>{code ? <Dashboard code={code} /> : <Login />}</>;
}

export default App;
