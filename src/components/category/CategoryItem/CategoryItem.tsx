import React from "react";
import "./CategoryItem.css";
import { CategoryModel } from "@/models/Category.model";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChevronDown } from "lucide-react";

const CategoryItem: React.FC<CategoryModel> = ({ title, notes }) => {
  return (
    <li className="bg-flex_cyan rounded-md flex items-center justify-between">
      <Icon name="folder" />
      <h4 className="text-white capitalize mr-auto ml-2.5">
        {title} ({notes.length})
      </h4>
      <Button variant="ghost" size="icon">
        <ChevronDown color="white" />
      </Button>
    </li>
  );
};

export default CategoryItem;
