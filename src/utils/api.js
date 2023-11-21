import { generateRate } from "./generateRate";

class Api {
  constructor(url) {
    this.url = url;
  }
  getAllProducts() {
    return fetch(`${this.url}/products`)
      .then((res) => res.json())
      .then((res) =>
        res.map((card) => {
          return { ...card, rate: generateRate(card) };
        })
      );
  }

  getCategoryProducts(category) {
    return fetch(`${this.url}/products/category/${category}`).then((res) =>
      res.json()
    );
  }

  addNewProduct(data) {
    return fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  getLimitProducts() {
    return fetch("https://fakestoreapi.com/products?limit=3").then((res) =>
      res.json()
    );
  }
  regNewUser(data) {
    return fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
  userLogin() {
    return fetch("https://fakestoreapi.com/auth/login", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    }).then((res) => res.json());
  }

  getAllCategories() {
    return fetch("https://fakestoreapi.com/products/categories").then((res) =>
      res.json()
    );
  }
}

export const api = new Api("https://fakestoreapi.com");
