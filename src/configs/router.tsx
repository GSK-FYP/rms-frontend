import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "register",
        element: <Register />,
        errorElement: <NotFound />,
    },
]);

export default router;
