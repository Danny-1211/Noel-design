import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Blog from "../pages/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "collection", element: <Collection /> },
      { path: "blog", element: <Blog /> },
      { path: "service", element: <Services /> },
    ],
  },
]);

export default router;
