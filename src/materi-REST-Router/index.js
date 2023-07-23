import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductListPage from "./pages/productList";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkoutpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductListPage />
      },
      {
        path: 'detail/:id',
        element: <DetailPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
    ],
  },
]);

const MateriRESTRouter = () => {
  return <RouterProvider router={router} />;
};

export default MateriRESTRouter;
