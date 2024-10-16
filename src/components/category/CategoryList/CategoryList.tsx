import React from "react";
import { Outlet } from "react-router-dom";
import { useCategories } from "@/context/Category.context";
import "./CategoryList.css";

import Card from "@/components/ui/card";
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryCreate from "../CategoryCreate/CategoryCreate";

const CategoryList: React.FC = () => {
  const { categories } = useCategories();

  return (
    <div className="flex gap-2.5 flex-wrap md:flex-nowrap">
      <Card className="h-full w-full md:w-[370px] ">
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
