import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { SelectedAnimal } from "./pages/SelectedAnimal";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "animals",
        element: <Animals />
      },
      {
        path: "animals/:id",
        element: <SelectedAnimal />
      }
    ]
  }
]);