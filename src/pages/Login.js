import { useAuth0 } from '@auth0/auth0-react';
export default function Login () {
    const {
        isAuthenticated,
        loginWithRedirect,
      } = useAuth0();
    
      return !isAuthenticated && (
        <div>
            <button onClick={loginWithRedirect}>Log in</button>
        </div>
        
      );
}