import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
// import { useEffect } from "react";
// import { uiAction } from "./store/ui-slice";

// import Notification from "./components/UI/Notification";

// let isInitial = true;

function App() {
  // const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiCard.cartIsVisible);
  // const cart = useSelector((state) => state.cart);
  // const notification = useSelector((state) => state.ui.notification);

  // useEffect(() => {
  //   const sendCartDate = async () => {
  //     dispatch(
  //       uiAction.showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending cart data!",
  //       })
  //     );
  //     const res = await fetch(
  //       "https://react-http-6b4a6.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!res.ok) {
  //       throw new Error("Sending cart data failed");
  //     }
  //     dispatch(
  //       uiAction.showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "Sent cart data successfully",
  //       })
  //     );
  //   };

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartDate().catch((error) => {
  //     dispatch(
  //       uiAction.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sending cart failed",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
