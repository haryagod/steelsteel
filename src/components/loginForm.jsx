import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import httpService from '../services/httpService'
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
      console.log(this.state.data)
      const {data} = await httpService.post("https://steelsteelapi.herokuapp.com/login",{...this.state.data})
      if(!!data &&  !!data[0] && data[0].username)
      {
      localStorage.setItem('user',data);
      this.props.history.push("/movies");
      }
      else
      {
        alert("invalid user")
      }
   
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
