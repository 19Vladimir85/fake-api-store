import { getLSItem, putLSItem } from "./localStorage";

export function generateRate(cart) {
  if (hasRate(cart)) {
    getRate(cart);
  } else {
    generateRating(cart);
  }
}

function hasRate(cart) {
  const ratingInLS = getLSItem("rate");
  if (!ratingInLS) {
    return false;
  }
  return ratingInLS[cart.id];

  // {16: 5, 21: 5}
}

function getRate(cart) {
  const ratingInLS = getLSItem("rate");
  return ratingInLS[cart.id];
}

function generateRating(cart) {
  const ratingInLS = getLSItem("rate");
  if (ratingInLS && ratingInLS[cart.id]) {
    return ratingInLS[cart.id];
  } else {
    ratingInLS[cart.id] = Math.floor(Math.random() * (6 - 1)) + 1;
    putLSItem("rate", ratingInLS);
    return ratingInLS[cart.id];
  }
}
