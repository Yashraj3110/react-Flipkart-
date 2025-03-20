import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/home";
import Signup from "./components/pages/signup";
import Cart from "./components/pages/cart";
import Fseller from "./components/pages/Fseller";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home }></Route>
          <Route exact path="/Fseller" Component={Fseller }></Route>
          <Route exact path="/Signup" Component={Signup}></Route>
          <Route exact path="/Cart" Component={Cart}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
