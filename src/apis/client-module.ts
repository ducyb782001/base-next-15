import { getAPI, postAPI } from "@/infrastructure/client-axios-instant";

const BASE_URL = "https://dummyjson.com/";

export const getAllProducts = () => {
  return getAPI({
    url: `${BASE_URL}products?delay=1000`,
  });
};

export const getAllRecipes = () => {
  return getAPI({
    url: `${BASE_URL}recipes?delay=1000`,
  });
};

export const getProductDetail = () => {
  return getAPI({
    url: `${BASE_URL}products/1?delay=1000`,
  });
};

export const getRecipesDetail = () => {
  return getAPI({
    url: `${BASE_URL}recipes/1?delay=1000`,
  });
};

export const createFakeResponse = (submitData, statusCode = "200") => {
  return postAPI({
    url: `${BASE_URL}http/${statusCode}/Hello_Peter`,
    data: submitData,
  });
};
