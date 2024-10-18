import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/errorPage"
import HomePage from "../pages/homePage"
import { PATH } from "../constants"
import { Roatot } from "./root"


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
