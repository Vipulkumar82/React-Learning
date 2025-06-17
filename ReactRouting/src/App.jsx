import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';

const router = createBrowserRouter(
  [
    {path:"/",
      element: <Home/>
    },
    {path:"/about",
      element: <About/>
    },
    {path:"/dashboard",
      element: <Dashboard/>
    },
  ]
);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
