import { useSelector } from "react-redux";

export function useSelectProductCartCount() {
  const cart = useSelector((store) => store.cartReducer.cart);
  return cart.reduce((acc, el) => acc + el.count, 0);
}
