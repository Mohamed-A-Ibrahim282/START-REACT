import { Component } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Notfound from "./component/Notfound/Notfound";

const router = createHashRouter([
  {
    path: "", element: <Navbar />, children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ]
  }
])

export default class App extends Component {

  render() {
    return <>
      <RouterProvider router={router} />
    </>
  }
}
