import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/cheeses",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export async function getСheeses() {
  return (await instance.get()).data;
}

export async function getCheeseById(id) {
  return (await instance.get(`/${id}`)).data;
}

export async function getCheesesFilteredByPrice(price) {
  return (await instance.get(`/filter2/${Number(price)}`)).data;
}

export async function getCheesesFilteredByType(type) {
  return (await instance.get(`/filter/${type}`)).data;
}

export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
