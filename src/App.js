import React from "react";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignUpPAge from "./components/pages/SignUpPage";
import RoomBid from "./components/pages/RoomBid";
import SignInForm from "./components/form/SignInForm"
import FormLelangPage from "./components/pages/FormLelangPage"

function App() {

  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/signIn" element={<SignInForm />}></Route>
            <Route path="/roomBid" element={<RoomBid />}></Route>
            <Route path="/formLelangPage" element={<FormLelangPage />}></Route>
            <Route path='/signUpPage' element={<SignUpPAge />}></Route>
          </Routes>
        </Router>
      </div >

  );
}

export default App;
