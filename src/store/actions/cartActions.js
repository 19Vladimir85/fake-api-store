// название типов actions (команд)
//вынесены в константы для удобства работы с ними
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";

// action - это функция которая возвращает объект вида type и payload
// action можно воспринимать как структуру которая позволит передавать данные в хранилище
export function addProduct(product) {
  return { type: ADD_PRODUCT, payload: product };
}

export function deleteProduct(id) {
  return { type: DELETE_PRODUCT, payload: id };
}

export function increaseProduct(id) {
  return { type: INCREASE_PRODUCT, payload: id };
}

export function decreaseProduct(id) {
  return { type: DECREASE_PRODUCT, payload: id };
}

export function clearCart() {
  return { type: CLEAR_CART };
}
