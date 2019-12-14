import React, { Component } from "react";
import Notifications, {notify} from 'react-notify-toast';
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
