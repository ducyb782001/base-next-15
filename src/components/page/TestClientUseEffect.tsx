import {
  getAllProducts,
  getAllRecipes,
  getProductDetail,
  getRecipesDetail,
} from "@/apis/client-module";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

function TestClientUseEffect() {
  useEffect(() => {
    handleCallAPI();
  }, []);

  const handleCallAPI = async () => {
    await Promise.allSettled([
      getAllProducts(),
      getAllRecipes(),
      getProductDetail(),
      getRecipesDetail(),
    ]);
    // await getAllProducts();
    // await getAllRecipes();
    // await getProductDetail();
    // await getRecipesDetail();
  };

  return (
    <div>
      <div>TestClientUseEffect</div>
    </div>
  );
}

export default TestClientUseEffect;
