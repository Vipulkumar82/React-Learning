import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';
import ParamComp from './Components/ParamComp';
import Subjects from './Components/Subjects';
import MockTest from './Components/MockTest';
import Assignments from './Components/Assignments';
import NotFound from './Components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:  
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"subjects",
          element:<Subjects/>
        },
        {
          path:"mock-test",
          element:<MockTest/>
        },
        {
          path:"assignments",
          element:<Assignments/>
        }
      ]
    },
    {
      path:"/courses",
      element: 
      <div>
        <Navbar/>
        <Courses/>
      </div>
    },
    {
      path:"/courses/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
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
