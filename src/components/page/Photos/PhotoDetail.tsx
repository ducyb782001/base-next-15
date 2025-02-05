"use client";

import DebouncedButton from "@/components/common/DebouncedButton";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import {
  createFakeResponse,
  getAllProducts,
  getAllRecipes,
  getRecipesDetail,
} from "@/apis/client-module";
import { toast } from "react-toastify";
import { showErrorData } from "@/libs";
import { StatusCodes } from "http-status-codes";

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

  const handlePostExample = async () => {
    try {
      const data = await createFakeResponse({ name: "Peter" }, "201");
      console.log("🚀 ~ handlePostExample ~ data:", data);
      if (data?.status && data?.status === StatusCodes.CREATED) {
        toast.success("Created 201, refetch");
        mutate("getAllRecipes");
        // Do logic post/ put/ delete success here
      } else {
        toast.error(
          showErrorData(data?.message) ||
            showErrorData(data) ||
            "Add custom token failed"
        );
      }
    } catch (error) {
      console.log("🚀 ~ handlePostExample ~ error:", error);
      toast.error(showErrorData(error) || "Do something failed");
    }
  };

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
      <DebouncedButton onClick={handlePostExample}>
        Fake a post api and mutate after that
      </DebouncedButton>
    </div>
  );
}

export default PhotoDetail;
