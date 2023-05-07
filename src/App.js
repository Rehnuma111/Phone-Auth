import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifyCode from "./Component/VerifyCode";

import Button from "./Component/Button";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Button />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verifycode" element={<VerifyCode />}></Route>
          {/* <Route path="/home" element={<PhoneVerificationPopup />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
