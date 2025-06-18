import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';
import ParamComp from './Components/ParamComp';

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
      </div>
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
