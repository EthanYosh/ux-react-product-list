import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import ProductList from "./components/ProductList";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    this.setState({
      productList: [
        {
          id: 1,
          name: "Wrench",
          price: "11.50",
          description: "Standard 3/16 Wrench.  Stainless Steel.",
        },
        {
          id: 2,
          name: "Phillips Screwdriver",
          price: "3.25",
          description: "4-inch long stainless steel Screwdriver",
        },
        {
          id: 3,
          name: "Power Drill",
          price: "85.99",
          description: "10 Amp Corded Power Drill",
        },
        {
          id: 4,
          name: "Hacksaw",
          price: "15.50",
          description: "10-inch Stainless Steel Hacksaw",
        },
      ],
    });
  }

  render() {
    return (



      <div className="App">
        <div>
          <h1>Welcome to Kenzie Hardware!</h1>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </nav>
        </div>


        <Switch>
          <Route path="/products/:productId">
            <ProductDetail productList={this.state.productList} />
          </Route>

          <Route path="/products">
            <ProductList productList={this.state.productList} />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);