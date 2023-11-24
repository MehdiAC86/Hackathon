import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import Root from "./layout/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404.jsx";
import Tuto from "./pages/Tuto.jsx";
import Contact from "./pages/Contact.jsx";
import Images from "./pages/Images.jsx";
import SingleImage from "./pages/SinglePage.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "tuto",
        element: <Tuto />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "images/",
        element: <Images />,
      },
      {
        path: "images/:id",
        element: <SingleImage />,
        loader: ({ params }) =>
          fetch(`https://api.pexels.com/v1/photos/${params.id}`, {
            headers: {
              Authorization:
                "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
            },
          }),
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
