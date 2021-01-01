import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/cheeses",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export async function getСheeses() {
  return (await instance.get()).data;
}

export async function getCheeseById(id) {
  await delay(3000);
  return (await instance.get(`/${id}`)).data;
}

export async function getCheesesFilteredByPrice(price) {
  return (
    await instance.get(`/filter2/${Number(price)}`)
  ).data;
}

export async function getCheesesFilteredByType(type) {
    return (
      await instance.get(`/filter/${type}`)
    ).data;
  }

const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
