import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/main'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Main/><Footer/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    }
  ])

  return (
     <>
     <RouterProvider router={router}/>
     
     </>
  )
}

export default App
