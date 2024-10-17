import RecipesProvider from "./context/recipesContext";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  );
}

export default App;
