import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import cucumber from '../assets/cucomber.jpg';
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children : [
      {
        path: "/",
        element:<Home/>
      }
    ]
  },
  {
    path: "/about",
    element: <div>Hello World</div>,
  },
]);