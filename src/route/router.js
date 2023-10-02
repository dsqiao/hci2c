import Login from '../page/Login';
import Home from '../page/Home';
import ApplyPage from '../page/apply/Apply';
import Record from '../page/record/Record';
import Report from '../page/report/Report';
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
    path: "/prod/record",
    element: <Record />
  },
  {
    path: "prod/report",
    element: <Report />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;