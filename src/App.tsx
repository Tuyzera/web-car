import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { CarDetail } from "./pages/CarDetail";
import { NewCar } from "./pages/Dashboard/NewCar";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element:  <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car/:id',
        element: <CarDetail />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/new',
        element: <NewCar />
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])

export {router}