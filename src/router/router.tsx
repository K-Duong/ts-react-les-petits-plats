import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/errorPage"
import HomePage from "../pages/homePage"
import { Root } from "./root"

export const PATH = {
  "HOME" : "/",
  "ERROR": "error"
}

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{
      path:"",
      element: <HomePage/>
    },
    
  ]
  }
])
