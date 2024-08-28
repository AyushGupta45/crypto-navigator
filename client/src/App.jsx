import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToasterProvider from "./Components/Toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import NavbarComponent from "./Components/Navbar";
import Home from "./Pages/Home";
import Wallet from "./Pages/Wallet";
import Market from "./Pages/Market";
import MarketData from "./Pages/MarketData";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <NavbarComponent />
        <ToasterProvider />
        <div className="app h-[calc(100%-5rem)] flex w-full p-2 lg:p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/markets" element={<Market />} />
            <Route path="/markets/:symbol" element={<MarketData/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
