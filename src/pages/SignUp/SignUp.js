import React, { useState, useEffect } from "react";
import classes from "./SignUp.module.css";

// UI
import TextInput from "../../components/UI/TextInput/TextInput";
import Spinner from "../../components/UI/Spinner/Spinner";

// Redux
import { connect } from "react-redux";
import { signUpAsync, openSnackbar } from "../../store/actions/index";

function SignUp(props) {
  const [username, setUsername] = useState({
    text: ""
  });

  const [password, setPassword] = useState({
    text: ""
  });

  const [password2, setPassword2] = useState({
    text: ""
  });

  const [signUpAttempted, setSignUpAttempted] = useState(false);

  useEffect(() => {
    if (signUpAttempted && !props.loading && !props.accessToken) {
      props.onOpenSnackbar("An error occured");
    } else if (signUpAttempted && !props.loading && props.accessToken) {
      props.onOpenSnackbar(`You're signed in!`);
    }
  }, [props.loading]);

  function formUpdateHandler(type, text) {
    switch (type) {
      case "username":
        text = text.toLowerCase().trim();
        if ((text.length <= 14 && text.match(/^[a-z0-9_-]+$/)) || text === "") {
          setUsername({
            text,
            lengthIsValid: text > 3
          });
        }

        break;
      case "password":
        if (text.match(/^[a-zA-Z0-9!@#$%^&*()]+$/) || text === "") {
          setPassword({
            text
          });
        }

        break;
      case "password2":
        setPassword2({
          text
        });
        break;

      default:
        break;
    }
  }

  async function signUpButtonClickesHandler() {
    setSignUpAttempted(true);
    props.onSignUp(username.text, password.text);
  }

  return (
    <div className={classes.SignUp}>
      <h1 className="page-header">Sign Up</h1>
      <div className="form-box">
        <TextInput
          label="Username"
          onChange={text => formUpdateHandler("username", text)}
          value={username.text}
          autoFocus
        />

        <TextInput
          label="Password"
          onChange={text => formUpdateHandler("password", text)}
          value={password.text}
          hidden
        />

        <TextInput
          label="Password (Re-enter)"
          onChange={text => formUpdateHandler("password2", text)}
          value={password2.text}
          hidden
        />

        <button
          className="primary-button large full-width"
          onClick={signUpButtonClickesHandler}
        >
          Sign Up
        </button>
      </div>

      {props.authLoading ? (
        <div className="spinner-box" style={{ margin: "30px 0" }}>
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    authLoading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (username, password) => dispatch(signUpAsync(username, password)),
    onOpenSnackbar: text => dispatch(openSnackbar(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
