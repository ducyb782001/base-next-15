"use client";

import React, { useState } from "react";
import React19New from "../news/React19New";
import { useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  getAllRecipes,
  getProductDetail,
  getRecipesDetail,
} from "@/apis/user-module";
import DebouncedButton from "../common/DebouncedButton";
import { toast } from "react-toastify";
import PrimaryInputCheckbox from "../common/PrimaryInputCheckbox";
import TestClientUseEffect from "./TestClientUseEffect";
import TestServerUseQuery from "./TestServerUseQuery";

function HomePage() {
  // const { isLoading: isLoading1 } = useQuery({
  //   queryKey: ["getAllProducts"],
  //   queryFn: () => getAllProducts(),
  // });
  // const { isLoading: isLoading2 } = useQuery({
  //   queryKey: ["getAllRecipies"],
  //   queryFn: () => getAllRecipes(),
  // });
  // const { isLoading: isLoading3 } = useQuery({
  //   queryKey: ["getProductDetail"],
  //   queryFn: () => getProductDetail(),
  // });
  // const { isLoading: isLoading4 } = useQuery({
  //   queryKey: ["getRecipesDetail"],
  //   queryFn: () => getRecipesDetail(),
  // });

  const [isCheckInput, setIsCheckInput] = useState(false);

  return (
    <div>
      <div>HomePage</div>
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
      {/* <div>isLoading1: {isLoading1 ? "TRUE" : "FALSE"}</div>
      <div>isLoading2: {isLoading2 ? "TRUE" : "FALSE"}</div>
      <div>isLoading3: {isLoading3 ? "TRUE" : "FALSE"}</div>
      <div>isLoading4: {isLoading4 ? "TRUE" : "FALSE"}</div> */}
      <React19New />
      {/* <TestClientUseEffect /> */}
      <TestServerUseQuery />
    </div>
  );
}

export default HomePage;
