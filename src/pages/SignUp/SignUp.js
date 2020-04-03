import React, { useState } from "react";
import classes from "./SignUp.module.css";

// UI
import TextInput from "../../components/UI/TextInput/TextInput";

// Services
import { signUp } from "../../utils/services";

// Redux
import { connect } from 'react-redux';
import { authStart, authSuccess, authFailure } from '../../store/actions/index';

function SignUp(props) {

  const [username, setUsername] = useState({
    text: ''
  });

  const [password, setPassword] = useState({
    text: ''
  });

  function usernameChangedHandler(text) {
    setUsername({
      text
    });
  }

  function passwordChangedHandler(text) {
    setPassword({
      text
    });
  }

  async function signUpButtonClickesHandler() {
    props.onSignInStart()

    const token = await signUp(username, password);

    if (token) {
      localStorage.setItem("accessToken", token);
      props.onSignInSuccess(token);
    } else {
      props.onSignInFailure();
    }
  }

  return (
    <div className={classes.SignUp}>
      <h1 className="page-header">Sign Up</h1>
      <div className="form-box">
        <TextInput
          label="Username"
          onChange={usernameChangedHandler}
          value={username.text}
          autoFocus
        />

        <TextInput
          label="Password"
          onChange={passwordChangedHandler}
          value={password.text}
        />

        <button className="primary-button large full-width">Sign Up</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    authLoading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignInStart: () => dispatch(authStart()),
    onSignInSuccess: accessToken => dispatch(authSuccess(accessToken)),
    onSignInFailure: () => dispatch(authFailure())
  }
}

export default connect(mapStateToProps)(SignUp)
