export function getLSItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function deleteLSItem(key) {
  localStorage.removeItem(key);
}

export function putLSItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
