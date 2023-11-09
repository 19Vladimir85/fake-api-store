import { useContext, useReducer, createContext } from "react";
import { putLSItem } from "../utils/localStorage";

// название действия (action.type)
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";
export const SET_CART = "SET_CART";

// тип данных в корзине, это [{...product, count}]
// action  это {type, payload}
function cartReducer(cart, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const count = action.payload.count;
      const id = action.payload.id;
      const itemInCart = cart.some((el) => id === el.id);
      if (itemInCart) {
        const newCart = cart.map((el) => {
          if (el.id === id) {
            el.count += count;
          }
          return el;
        });
        putLSItem("cart", newCart);
      } else {
        const newCart = [...cart, action.payload];
        putLSItem("cart", newCart);
        return newCart;
      }
    case SET_CART:
      return [...action.payload];

    default:
      return "There is no such action";
  }
}

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
