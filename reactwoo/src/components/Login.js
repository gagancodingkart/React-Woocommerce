import React, { Component } from "react";
import { WooCommerce } from "./../service/WoocommerceConnection.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { postData } from "./../service/Common.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
	  username: '',
	  password: '',
    };
  }

  handleChange = (e) => {
	var state = {};
	state[e.target.name] = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
	this.setState(state);
  }

  loginUser = () => {
 
	var req = { username: this.state.username, password: this.state.password };
	
	postData('wp-json/jwt-auth/v1/token', req).then((result) => {
		if(result.token){
			localStorage.setItem("token", result.token);
			localStorage.setItem("display_name", result.user_display_name);
			this.setState({message: "User login successfully", redirectLogin: true});

		}else if(result.data.status === 403){
			this.setState({message: result.message});
		}
	})

  };


  render() {
    return (
      <div>
        <Header />
        <section id="form">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">
                  <h2>Login to your account</h2>
				          {this.state.message}
                  <form action="#">
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Passowrd" onChange={this.handleChange} value={this.state.password} />
                    
                    <button type="button" onClick={this.loginUser} className="btn btn-default">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-1">
                <h2 className="or">OR</h2>
              </div>
              <div className="col-sm-4">
                <div className="signup-form">
                  <h2>New User Signup!</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-default">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Login;
