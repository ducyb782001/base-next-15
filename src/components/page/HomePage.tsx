"use client";

import React, { useState } from "react";
import React19New from "../news/React19New";
import DebouncedButton from "../common/DebouncedButton";
import { toast } from "react-toastify";
import PrimaryInputCheckbox from "../common/PrimaryInputCheckbox";
import useSWR from "swr";
import Link from "next/link";
import {
  getAllProducts,
  getAllRecipes,
  getRecipesDetail,
} from "@/apis/client-module";

function HomePage() {
  const [isCheckInput, setIsCheckInput] = useState(false);
  const fetcher = async ([url, limit]) => {
    const res = await fetch(`${url}?_limit=${limit}`);
    return res.json();
  };

  const { data: recipes, isLoading } = useSWR([`getAllRecipes`], getAllRecipes);
  const { isLoading: isLoadingTodos } = useSWR(
    [`getAllProducts`],
    getAllProducts
  );
  const { isLoading: isLoadingPhotos } = useSWR(
    [`getRecipesDetail`],
    getRecipesDetail
  );
  return (
    <div>
      <div>HomePage isLoading : {isLoading ? "true" : "false"}</div>
      <div>isLoadingTodos: {isLoadingTodos ? "true" : "false"}</div>
      <div>isLoadingPhotos: {isLoadingPhotos ? "true" : "false"}</div>
      <Link className="bg-blue-400 mb-10" href={`/photos`}>
        Go to photo
      </Link>
      <DebouncedButton
        onClick={() => {
          toast.success("LALA");
          console.log("LALA");
        }}
      >
        Hello
      </DebouncedButton>
      <PrimaryInputCheckbox
        type="checkbox"
        checked={isCheckInput}
        onChange={() => {
          setIsCheckInput(!isCheckInput);
        }}
      />
      <PrimaryInputCheckbox
        type="radio"
        checked={isCheckInput}
        onChange={() => {
          setIsCheckInput(!isCheckInput);
        }}
      />
      <React19New />
    </div>
  );
}

export default HomePage;
