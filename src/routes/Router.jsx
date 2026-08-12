import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Achievements from "../pages/Achievements";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "achievements",
        element: <Achievements />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
