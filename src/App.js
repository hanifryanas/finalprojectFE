import React, { useEffect, useState } from "react";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(true);

  useEffect(() => {
    updateUserLogin();
  }, []);

  const updateUserLogin = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
      setUser(JSON.parse(atob(accessToken.split(".")[1])));
    }
  }

  return (
    isLoggedIn ? (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/signIn" element={<SignInForm />}></Route>
            <Route path="/roomBid" element={<RoomBid />}></Route>
            <Route path="/formLelangPage" element={<FormLelangPage />}></Route>
          </Routes>
        </Router>
      </div >
    ) : (
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
    )

  );
}

export default App;
