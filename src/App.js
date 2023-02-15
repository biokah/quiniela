// Authprovider

import Auth0ProviderWithRedirectCallback from "./components/Auth0ProviderWithRedirectCallback"
import ProtectedRoute from "./components/ProtectedRoute"

// Layouts
import RootLayout from "./layouts/RootLayout"

// Pages
import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import Rules from "./pages/Rules"
import Login from "./pages/Login";

// Styles
import './App.css';

// Router library 
import { Route, BrowserRouter, Routes} from 'react-router-dom';


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID



function App() {
  
  return (
    <div className="w-full h-full">
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
      domain={domain}
      clientId={clientId}
      authorizationParams={
        {
          redirect_uri: window.location.origin
        }
      }
      >
        <Routes>
          <Route path="/" element={<ProtectedRoute component={RootLayout} />}>
            <Route index element={<Home />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="rules" element={<Rules />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
    </div>
  );
}

export default App;
