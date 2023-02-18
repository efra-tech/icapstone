import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';

const uiConfig = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true,},
        GoogleAuthProvider.PROVIDER_ID
        ],
    signInFlow: 'popup', //inputs Google sign in into the page instead of different webpage
    credentialHelper: 'none', //prevents people from choosing accounts
    callbacks: {
        signInSuccessWithAuthResult: () => { //don’t redirect/refresh
            return false;
        }
    }
        
}

export default function SignInPage(props) {
  const auth = getAuth();
  
if (props.user) {
    return <Redirect to="/addsubscription" />
}

  return (
    <div className="card bg-light">
        <div className="container card-body">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
         </div>
    </div>
  )
}