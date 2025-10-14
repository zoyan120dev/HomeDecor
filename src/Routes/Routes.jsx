import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Layouts/Root";
import Error from "../pages/Err/Error";
import Products from "../pages/Products";
import WIshlist from "../pages/WIshlist";
import ProductDaitlsPage from "../pages/ProductDaitlsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>,
    hydrateFallbackElement:<p>Loading...</p>,
    children: [
      {
        index:true,
        element: <Home />,
        loader:() => fetch('./furniture.json')
      },
      {
        path: "/products",
        element: <Products/>,
      },

       {
        path: "/wishlist",
        element: <WIshlist/>,
      },

      {
        path:'/product/:id',
        element:<ProductDaitlsPage/>
      }
    ],
  },
  
]);

export default router;
