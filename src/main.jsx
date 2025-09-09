import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import MissionVision from "./pages/MissionVision.jsx"
import Projects from "./pages/Projects.jsx"
import References from "./pages/References.jsx"
import Contact from "./pages/Contact.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },                 // "/"
      { path: "/hakkimizda", element: <About /> },        // "/hakkimizda"
      { path: "/misyon-vizyon", element: <MissionVision /> }, // "/misyon-vizyon"
      { path: "/projeler", element: <Projects /> },       // "/projeler?status=..."
      { path: "/projeler/:slug", element: <ProjectDetail /> }, // "/projeler/:slug"
      { path: "/referanslar", element: <References /> },  // "/referanslar?cat=..."
      { path: "/iletisim", element: <Contact /> },        // "/iletisim"
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
