import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {

  onLogout =()=>{
    localStorage.clear();
    window.location.reload();
  }
  render() {
    let user =null;
    const userstr = localStorage.getItem('user');
    if(!!userstr)
    {
      user = JSON.parse(userstr)
    }
    return (
      <React.Fragment>
        <NavBar user = {user} onLogout = {this.onLogout} />
        <main className="container">
          <Switch>
            {user==null && <Route path="/login" component={LoginForm} />}
            {!!user && user.isAdmin && <Route path="/movies/:id" component={MovieForm} />}
            {!!user && user.isAdmin && <Route path="/movies" component={Movies} />}
            {!!user &&  user && <Route path="/customers" component={Customers} />}
            {!!user && <Route path="/rentals" component={Rentals} />}
            {!!user && <Route path="/not-found" component={NotFound} />}
            {!!user &&   user.isAdmin && <Redirect from="/" exact to="/movies" />}        
            {!!user &&  <Redirect from="/" exact to="/rentals" />}        
            {!!user && <Redirect to="/not-found" />}
            {user==null && <Redirect to="/login" />}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
