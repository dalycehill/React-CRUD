import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Items from "./pages/Items";
import './App.css';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/pages/Categories">Categories</NavLink></li>
                <li><NavLink to="/pages/Items">Items</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/pages/Categories" component={Categories}/>
                <Route path="/pages/Items" component={Items}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
