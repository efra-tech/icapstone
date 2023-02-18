import React, {useState, useEffect} from "react";
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import loginImg from '../img/login.png';

let isCreate = false; //to determine if account is being created or not

export default function Login(props) {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthListener = onAuthStateChanged(auth, (user) => {
      if(user){ //have a user
        console.log("logging in", user);
        setUserData(user);
      } else {
        console.log("logging out");
        setUserData(undefined);
      }
    })

    return () => {
      unregisterAuthListener();
    }
  }, []);

  if(userData === undefined) {
    return <LoginScreen />
  } else {
    return <UserScreen user={userData}/>
  }
}

function LoginScreen(props) {
  const [loginError, setLoginError] = useState(undefined);

  const setIsCreate = () => { //onClick function to run if create account button is clicked
    isCreate = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    const username = event.target.username.value;
    const pass = event.target.password.value;
    const auth = getAuth();

    if(!isCreate) {
      signInWithEmailAndPassword(auth, username, pass)
        .catch((error) => {
          const errorMessage = error.message;
          setLoginError(errorMessage);
      });
    } else {
      createUserWithEmailAndPassword(auth, username, pass)
        .then((userCredential) => {
          let userID = userCredential.user.uid;

          //set default display name
          updateProfile(auth.currentUser, { displayName: "user-" + userID})
          .catch((error) => {
            const errorMessage = error.message;
            setLoginError(errorMessage);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoginError(errorMessage);
      });
    }

    isCreate = false;
  }

  return (
    <div class="login-background">
      <div class="login-form">
    <div className="login">
    <h2>Login</h2>
    <Container className="mt-9">
      <Row>
        <Col className="text-center mt-10 p-5">
        <AccountBoxIcon style={{ fontSize: 85 }} className="user-pfp" alt="user profile icon" />
        <Form onSubmit={handleSubmit}>
  <Form.Group controlId="usernameInput">
    <Form.Control type="username" placeholder="Email" name="username"/>
    <Form.Control className="mt-3" type="password" name="password" placeholder="Password" />
    <Form.Text className="text-muted">
      Welcome back :)
    </Form.Text>
  </Form.Group>

  <Button variant="primary btn-block" type="submit" className="login-button mt-2">
    Login
  </Button>
  <div className="create-profile">
  <button type="submit" class="btn btn-link" style={{ fontSize: 11 }} onClick={setIsCreate}>Create Profile</button>
  </div>
  <p>Hint: To create a profile, type your desired email and password and click "Create Profile".</p>
</Form>
          </Col>
          <Col lg={6} md={6} sm={12} className="ml-15 p-5">
            <img class="img-responsive" className="w-100 h-100"  src={loginImg} alt="login vector band art"/>
            </Col>
      </Row>
      </Container>
      <LoginError error={loginError}/>
    </div>
    </div>
    </div>
  );
}

function LoginError(props) {
  if(props.error === undefined) {
    return null;
  } else {
    return (
      <h2 className="error-alert">Login error: {props.error}</h2>
    );
  }
}

function UserScreen(props) {
  const auth = getAuth();
  const [username, setUsername] = useState(props.user.displayName);
  const [userError, setUserError] = useState(undefined);

  //console.log(props.user);
  const handleSignOut = () => {
    auth.signOut()
      .catch(err => console.log(err));
  }

  // set profile username to entered username when submitted
  const handleUsernameSubmit = (event) => {
    console.log(event);
    setUsername(event.target.username);

    updateProfile(auth.currentUser, { displayName: username})
      .then(() => {
        //console.log(username);
      }).catch((error) => {
        const errorMessage = error.message;
        setUserError(errorMessage);
    });
  }

  // change username state whenever text is entered
  const handleUsernameChange = (event) => {
    const currUser = event.target.value;
    setUsername(currUser);
  }

  return (
    <div className="user-screen">
      <h2>Logged in as {props.user.email}</h2>
      <h3>Current display name: {props.user.displayName}</h3>
      <form onSubmit={handleUsernameSubmit}>
      <label htmlFor="display_name"> Display Name: </label>
        <input type="text" name="username" id="username" placeholder="Enter new display name..." onChange={handleUsernameChange}/>
        <input type="submit" name="submit-username" value="Update" />
      </form>
      <input type="button" name="logout" id="logout" value="Log Out" onClick={handleSignOut}/>
      <UserError error={userError}/>
    </div>
  );
}

function UserError(props) {
  if(props.error === undefined) {
    return null;
  } else {
    return (
      <h2 className="error-alert">User error: {props.error}</h2>
    );
  }
}