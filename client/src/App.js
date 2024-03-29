import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
