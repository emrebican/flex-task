import React, { ReactNode, useEffect, useReducer } from "react";
import { categoryReducer } from "@/store/reducers/Category.reducer";
import { CategoryModel } from "@/models/Category.model";
import dummyData from '../../assets/dummy.json'
import { CategoryActions } from "@/models/CategoryActions.model";

export interface CategoryContextType {
  categories: CategoryModel[];
  dispatch: React.Dispatch<CategoryActions>;
}

export const CategoryContext = React.createContext<
  CategoryContextType | undefined
>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, dispatch] = useReducer(categoryReducer, [], () => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories ? JSON.parse(storedCategories) : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};
