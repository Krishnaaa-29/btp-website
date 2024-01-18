import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout, Register, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "auth/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer position="top-center" />
    </RouterProvider>
  );
}

export default App;
