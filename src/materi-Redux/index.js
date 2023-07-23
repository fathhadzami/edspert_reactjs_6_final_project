import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductListPage from "./pages/productList";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkoutpage";
import { Provider } from "react-redux";
import store from './store';

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

const MateriRedux = () => {
  return <Provider store={store}><RouterProvider router={router} /></Provider>;
};

export default MateriRedux;
