import React from "react";
import "./CategoryList.css";

import CategoryItem from "../CategoryItem/CategoryItem";
import Card from "@/components/ui/card";
import CategoryCreate from "../CategoryCreate/CategoryCreate";
import { useCategories } from "@/context/Category.context";
import { Outlet } from "react-router-dom";

const CategoryList: React.FC = () => {
  const { categories } = useCategories();

  return (
    <div className="flex gap-2.5">
      <Card className="wrapper">
        {/* ADD NEW CATEGORY */}
        <CategoryCreate />

        {/* CATEGORY LIST */}
        <ul className="flex flex-col gap-2.5">
          {categories.map((item) => (
            <CategoryItem
              key={item.id}
              id={item.id}
              title={item.title}
              notes={item.notes}
            />
          ))}
        </ul>
      </Card>

      {/* NOTE LIST */}
      <Outlet />
    </div>
  );
};

export default CategoryList;
