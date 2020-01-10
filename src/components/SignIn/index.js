import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Input from "../Input/index.js";
import Button from "../Button";
import "./index.css";


const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  submit = () => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN);
      })
      .catch(error => {
        console.log(error);
        document.body.style.animation = "error 1s";
        setTimeout(()=>{
          document.body.style.animation = "none";
        }, 1000);
      });

  };

  onChangeHandler(value, param){
    this.setState({[param]:value})
  }

  render() {

    return (
      <div className = "page">
      <div className = "leftSide">
        <h1 className="auth">Авторизація</h1>
        <h2 className="login">Пошта</h2>

        <Input
            className = "inputLogin"
            type="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.onChangeHandler}
            param="email"
        />  

        <h2 className="login">Пароль</h2>

        <Input
            className = "inputLogin"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            param="password"
        />        

        <Button className="signInButton" onClick={this.submit} placeholder="увійти" />
      
      </div>
      <div className = "rightSide">
        <p>Це сторінка авторизації редакторів, якщо ти хочеш стати одим із 
          <br /> нас - пиши сюди </p>
          <a href="mailto:kishko.igor@gmail.com">kishko.igor@gmail.com</a>
      </div>
      </div>

    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
