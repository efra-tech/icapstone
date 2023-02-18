import React, { useState, useEffect } from 'react';
import Header from './Header'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import AddASubScription from './AddASubscription';
import PopularServices from './PopularServices';
import Footer from './Footer';
import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import PrivateRoute from './PrivateRoute';
import Success from './Success';

function App(data) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    })
    return () => {
      unregisterAuthListener();
    }
  }, []);

  return (
    <div>
      <Header />

      <NavBar user={currentUser}/>

      <main>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/signinpage">
            <SignInPage user={currentUser} />
          </Route>
          <PrivateRoute path="/dashboard" user={currentUser}>
            <Dashboard subscription={data.data} user={currentUser}/>
          </PrivateRoute>
          <PrivateRoute path="/addsubscription" user={currentUser}>
            <div className="addSub">
              <AddASubScription user={currentUser}/>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/success" user={currentUser}>
            <Success />
          </PrivateRoute>
          <Route path="/popular/:time">
              <PopularServices popular={data.popular}/>
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Redirect exact to="/" />
        </Switch>
      </main>

      <Footer />
    </div>
  )
}

export default App;