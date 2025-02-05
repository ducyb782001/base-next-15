"use client";

import DebouncedButton from "@/components/common/DebouncedButton";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import {
  getAllProducts,
  getAllRecipes,
  getRecipesDetail,
} from "@/apis/client-module";

function PhotoDetail() {
  const { data: recipes, isLoading } = useSWR("getAllRecipes", getAllRecipes, {
    revalidateOnFocus: false,
  });
  const { isLoading: isLoadingTodos } = useSWR(
    "getAllProducts",
    getAllProducts,
    { revalidateOnFocus: false }
  );
  const { isLoading: isLoadingPhotos } = useSWR(
    [`getRecipesDetail`],
    getRecipesDetail,
    { revalidateOnFocus: false }
  );
  const { mutate } = useSWRConfig();
  const router = useRouter();
  return (
    <div>
      <DebouncedButton
        onClick={() => {
          router.back();
        }}
      >
        Back to list photos
      </DebouncedButton>
      PhotoDetail
      <div>isLoading : {isLoading ? "true" : "false"}</div>
      <div>isLoadingTodos: {isLoadingTodos ? "true" : "false"}</div>
      <div>isLoadingPhotos: {isLoadingPhotos ? "true" : "false"}</div>
      <DebouncedButton
        onClick={() => {
          mutate("getAllProducts");
        }}
      >
        Mutate products - todos
      </DebouncedButton>
    </div>
  );
}

export default PhotoDetail;
