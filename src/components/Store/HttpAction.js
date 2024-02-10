import { useDispatch } from "react-redux";
import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const sendingCart = (cart) => {
  //Dispatch hook can't be call here in Reduv action object but from
  //wher this action object is rerequired from there dispatch can be called
  //and it automaticaly provide dispatch
  return async (dispatch) => {
    dispatch(
      uiAction.showNotication({
        message: "Sending...",
        status: "pending",
        title: "In process",
      })
    );

    const sendingCartData = async () => {
      const response = await fetch(
        "https://book-cart-91f20-default-rtdb.firebaseio.com/Books.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Error Sending data ");
      }
      dispatch(
        uiAction.showNotication({
          message: "Successful Send data ",
          status: "success",
          title: "Successful",
        })
      );
    };

    try {
      sendingCartData();
    } catch (error) {
      dispatch(
        uiAction.showNotication({
          message: "Error Sending data ",
          status: "error",
          title: "Error",
        })
      );
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    const data = await fetch(
      "https://book-cart-91f20-default-rtdb.firebaseio.com/Books.json"
    );
    const response = await data.json();

    try {
      dispatch(
        cartAction.replaceCart({
          items: response.items||[], //because when initially run the array would be empty and react find it as undefined therfore we keep it []
          totalQuant: response.totalQuant,
        })
      );
    } catch (error) {
      console.log("error");
    }
  };
};
