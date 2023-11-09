import { putLSItem, getLSItem, deleteLSItem } from "../../utils/localStorage";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_CART,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
} from "../actions/cartActions";

const initialStore = { cart: getLSItem("cart") || [], theme: "white" };
// cartReducer - функция которая содержит логику для изменения сущности cart внутри хранилища.
//Функция всегда принимает начальное состояние store(cart) и action на основании которого будет выбран нужный тип обработки хранилища
export function cartReducer(store = initialStore, action) {
  const cart = store.cart;

  switch (action.type) {
    case ADD_PRODUCT:
      const count = action.payload.count;
      const id = action.payload.id;
      const itemInCart = cart.some((el) => el.id === id);
      console.log(action.payload);
      if (itemInCart) {
        const newCart = cart.map((el) => {
          if (el.id === id) {
            el.count += count;
          }
          return el;
        });
        console.log(newCart, cart);
        putLSItem("cart", newCart);
        return { ...store, cart: newCart };
      } else {
        const newCart = [...cart, action.payload];
        putLSItem("cart", newCart);
        return { ...store, cart: newCart };
      }
    case CLEAR_CART:
      deleteLSItem("cart");
      return { ...store, cart: [] };

    case DELETE_PRODUCT:
      const newStore = cart.filter((el) => el.id !== action.payload);
      putLSItem("cart", newStore);
      return { ...store, cart: newStore };

    case INCREASE_PRODUCT:
      const newCart = cart.map((el) =>
        el.id === action.payload ? { ...el, count: el.count + 1 } : el
      );
      putLSItem("cart", newCart);
      return { ...store, cart: newCart };

    case DECREASE_PRODUCT:
      const newCart2 = cart.map((el) =>
        el.id === action.payload ? { ...el, count: el.count - 1 } : el
      );
      putLSItem("cart", newCart2);
      return { ...store, cart: newCart2 };

    default:
      return store;
  }
}
