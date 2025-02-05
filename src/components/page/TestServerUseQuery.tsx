import { getAllRecipes, getRecipesDetail } from "@/apis/client-module";
import { getAllProducts } from "@/apis/user-module";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export async function getServerSideProps(context) {
  console.log("🚀 ~ getServerSideProps ~ context:", context);
  const id = context.params;
  // Gọi 3 API song song với Promise.allSettled
  const results = await Promise.allSettled([
    getAllProducts(),
    getAllRecipes(),
    getRecipesDetail(id),
  ]);

  // Lấy kết quả thành công hoặc giá trị mặc định nếu thất bại
  const products = results[0].status === "fulfilled" ? results[0].value : null;
  const recipes = results[1].status === "fulfilled" ? results[1].value : null;
  const recipeDetail =
    results[2].status === "fulfilled" ? results[2].value : null;

  return {
    props: {
      products,
      recipes,
      recipeDetail,
    },
  };
}

export default function TestServerUseQuery(props) {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllProducts,
    initialData: props.recipeDetail,
  });

  return (
    <div>
      <div>ABCD</div>
    </div>
  );
}
