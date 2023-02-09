import RootLayout from "./layouts/RootLayout"

import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import Rules from "./pages/Rules"

import './App.css';
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
      <Route path="rules" element={<Rules />} />
    </Route>
  )
);

function App() {
  
  return (
    <div className="bg-neutral-200 w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
