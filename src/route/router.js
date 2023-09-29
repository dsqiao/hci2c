import Login from '../page/Login';
import Home from '../page/Home';
import ApplyPage from '../page/Apply';
import TestPage from '../page/Test';
import Product from '../page/Product';
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <TestPage />
  },
  {
    path: "/prod",
    element: <Product />
  },
  {
    path: "/prod/apply",
    element: <ApplyPage />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;