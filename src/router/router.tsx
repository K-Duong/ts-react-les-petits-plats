import { createBrowserRouter, Outlet } from "react-router-dom"
import ErrorPage from "../pages/errorPage"
import HomePage from "../pages/homePage"

export const PATH = {
  "HOME" : "/",
  "ERROR": "error"
}

export function Route () {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Route/>,
    errorElement: <ErrorPage/>,
    children: [{
      path:"",
      element: <HomePage/>
    },
    
  ]
  }
])
