// auth0
import { withAuthenticationRequired } from '@auth0/auth0-react';

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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ranking" element={<Ranking />} />
      <Route path="login" element={<Login />} />
      <Route path="rules" element={<Rules />} />
    </Route>
  )
);

function App() {
  
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
