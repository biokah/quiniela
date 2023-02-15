import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={loginWithRedirect}>Log in</button>
 }
 else {
    return isAuthenticated && (<div>
      <button onClick={() => logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        })}>Logout</button>
    </div>);
  };


}

export default LoginButton;