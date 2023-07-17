class Api {
  constructor(url) {
    this.url = url;
  }
  getAllProducts() {
    return fetch(`${this.url}/products`).then((res) => res.json());
  }
  getElectronicsProducts() {
    return fetch(`${this.url}/products/category/electronics`).then((res) =>
      res.json()
    );
  }
  getJeweleryProducts() {
    return fetch(`${this.url}/products/category/jewelery`).then((res) =>
      res.json()
    );
  }
  getMensClothingProducts() {
    return fetch(`${this.url}/products/category/men's clothing`).then((res) =>
      res.json()
    );
  }
  getWomensClothingProducts() {
    return fetch(`${this.url}/products/category/women's clothing`).then((res) =>
      res.json()
    );
  }
  addNewProduct(data) {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  getLimitProducts() {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
}
export const api = new Api("https://fakestoreapi.com");
