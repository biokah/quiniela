import { useAuth0 } from '@auth0/auth0-react';
export default function Login () {
    const {
        isAuthenticated,
        loginWithRedirect,
      } = useAuth0();
    
      return !isAuthenticated && (
        <div className="bg-white">
            <form className="absolute top-1/2 rounded left-1/2 bg-white login-form min-h-[150px] min-w-[300px] flex flex-col items-center justify-center p-4">
                <span className="font-bold mb-4">Quiniela WizeLine</span>
                <button className="bg-blue-600 rounded text-white px-6 font-bold w-full pb-1" onClick={loginWithRedirect}>Log in</button>
            </form>
        </div>
        
      );
}