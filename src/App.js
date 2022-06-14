import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUpPAge from "./components/pages/SignUpPage";
import RoomBid from "./components/pages/RoomBid";
import FormLelangPage from "./components/pages/FormLelangPage"

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signUpPage' element={<SignUpPAge />}></Route>
        <Route path="/roomBid" element={<RoomBid />}></Route>
        <Route path="/formLelangPage" element={<FormLelangPage />}></Route>
      </Routes>
    </div >

  );
}

export default App;
