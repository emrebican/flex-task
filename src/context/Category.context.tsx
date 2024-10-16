import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import { CategoryActions, categoryReducer } from "@/reducers/Category.reducer";
import { CategoryModel } from "@/models/Category.model";

interface CategoryContextType {
  categories: CategoryModel[];
  dispatch: React.Dispatch<CategoryActions>;
}

const CategoryContext = React.createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, dispatch] = useReducer(categoryReducer, [], () => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories ? JSON.parse(storedCategories) : [];
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

export const useCategories = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("context must be used within a Provider");
  }

  return context;
};
