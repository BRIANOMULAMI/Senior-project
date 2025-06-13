import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/SignUp/Login";
import Register from "./components/Auth/SignIn/Register";
import Homepage from "./Pages/Homepage";
import TestCreateJudge from "./components/TestCreateJudge";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/judge" element={<TestCreateJudge />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
