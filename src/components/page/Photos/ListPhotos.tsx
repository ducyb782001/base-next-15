"use client";
import DebouncedButton from "@/components/common/DebouncedButton";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import {
  getAllProducts,
  getAllRecipes,
  getRecipesDetail,
} from "@/apis/client-module";

function ListPhotos() {
  const { data: recipes, isLoading } = useSWR([`getAllRecipes`], getAllRecipes);
  const { isLoading: isLoadingTodos } = useSWR(
    [`getAllProducts`],
    getAllProducts
  );
  const { isLoading: isLoadingPhotos } = useSWR(
    [`getRecipesDetail`],
    getRecipesDetail
  );

  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <DebouncedButton
        onClick={() => {
          router.back();
        }}
      >
        Back to home
      </DebouncedButton>
      <DebouncedButton
        onClick={() => {
          router.push(`/photos/1`);
        }}
      >
        Go to photo details
      </DebouncedButton>
      ListPhotos
      <div>isLoading : {isLoading ? "true" : "false"}</div>
      <div>isLoadingTodos: {isLoadingTodos ? "true" : "false"}</div>
      <div>isLoadingPhotos: {isLoadingPhotos ? "true" : "false"}</div>
    </div>
  );
}

export default ListPhotos;
