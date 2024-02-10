import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/Notification/Notification";
import Products from "./components/Shop/Products";
import { cartAction } from "./components/Store/cart-slice";
import { fetchData, sendingCart } from "./components/Store/HttpAction";
let initialState = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (initialState) {
      initialState = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendingCart(cart)); //local change that is adding or sub will cause the notification
    }
    //here dispatch is used and it passess the imported action object
    //automatically this transfer the dispatch
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
