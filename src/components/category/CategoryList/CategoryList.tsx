import React from "react";
import "./CategoryList.css";

import CategoryItem from "../CategoryItem/CategoryItem";
import Card from "@/components/ui/card";
import { CategoryModel } from "@/models/Category.model";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const CategoryList: React.FC<{ categories: CategoryModel[] }> = ({
  categories,
}) => {
  return (
    <Card className="wrapper">
      {/* ADD NEW CATEGORY */}
      <Button className="w-full bg-flex_green flex justify-between mb-2.5 py-0">
        <span className="grow">Create Category</span>
        <Separator
          orientation="vertical"
          className="h-full mr-1 bg-flex_darkgreen"
        />
        <Icon name="plus" />
      </Button>

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
