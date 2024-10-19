import {
  CategoryContext,
  CategoryContextType,
} from "@/store/context/Category.context";
import { useContext } from "react";

export const useCategories = (): CategoryContextType => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("context must be used within a Provider");
  }

  return context;
};
