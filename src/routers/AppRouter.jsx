import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Blog from "../pages/Blog";
import Services from "../pages/Service";
import BlogDetail from "../pages/BlogDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "collection", element: <Collection /> },
      { path: "blog", element: <Blog /> },
      { path: "service", element: <Services /> },
      { path: "blogdetail/:id", element: <BlogDetail /> },
    ],
  },
]);

export default router;
