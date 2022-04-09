import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Content from "../pages/Content";

export const clientRoutes = [
    {
        index: true,
        element: <Home />,
        path: "/",
    },
    {
        index: true,
        element: <About />,
        path: "/about",
    },
    {
        index: true,
        element: <Content />,
        path: "/life",
    },
    {
        index: true,
        element: <Contact />,
        path: "/contact",
    },
];
