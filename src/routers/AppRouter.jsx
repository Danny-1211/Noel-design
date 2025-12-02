import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Collection from "../pages/Collection";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: 'collection', element: <Collection /> },
            ],
        },
    ]
)

export default router;
