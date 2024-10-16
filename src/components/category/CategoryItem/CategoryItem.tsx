import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CategoryItem.css";

import { CategoryModel } from "@/models/Category.model";
import { ChevronDown, ChevronRight, Folder } from "lucide-react";

const CategoryItem: React.FC<CategoryModel> = ({ id, title, notes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${id}/notes`;

  function handleNavigate() {
    navigate(`/${id}/notes`);
  }

  return (
    <li
      className={`w-full md:w-[350px] ${
        isActive ? "transparent" : "bg-flex_cyan"
      } rounded-md flex items-center justify-between cursor-pointer`}
      onClick={handleNavigate}
    >
      <Folder
        fill={isActive ? "black" : "white"}
        className={isActive ? "text-black" : "text-white"}
      />
      <h4
        className={`capitalize mr-auto ml-2.5 ${
          isActive ? "text-flex_black" : "text-white"
        }`}
      >
        {title} ({notes.length})
      </h4>
      {isActive ? (
        <ChevronRight fill="black" className="text-black" />
      ) : (
        <ChevronDown fill="white" className="text-white" />
      )}
    </li>
  );
};

export default CategoryItem;
