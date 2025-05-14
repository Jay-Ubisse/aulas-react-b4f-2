import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Courses, Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
