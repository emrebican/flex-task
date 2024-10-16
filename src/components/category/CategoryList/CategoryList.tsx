import React from "react";
import "./CategoryList.css";

import CategoryItem from "../CategoryItem/CategoryItem";
import Card from "@/components/ui/card";
import { CategoryModel } from "@/models/Category.model";
import CategoryCreate from "../CategoryCreate/CategoryCreate";

const CategoryList: React.FC<{ categories: CategoryModel[] }> = ({
  categories,
}) => {
  return (
    <Card className="wrapper">
      {/* ADD NEW CATEGORY */}
      <CategoryCreate />

      {/* LIST */}
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
  );
};

export default CategoryList;
