import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CategoryModel } from "@/models/Category.model";
import { ChevronDown, ChevronRight, Folder } from "lucide-react";

const CategoryItem: React.FC<CategoryModel> = ({ id, title, notes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive =
    location.pathname === `/${id}/notes` ||
    location.pathname === `/${id}/note-create`;

  const handleNavigate = useCallback(() => {
    navigate(`/${id}/notes`);
  }, [navigate, id]);

  return (
    <li
      className={`w-full h-[42px] px-2.5  ${
        isActive ? "transparent" : "bg-flex_cyan"
      } rounded-md flex items-center justify-between cursor-pointer`}
      onClick={handleNavigate}
    >
      <Folder
        fill={isActive ? "black" : "white"}
        className={isActive ? "black" : "text-white"}
      />
      <h4
        className={`capitalize mr-auto ml-2.5 ${
          isActive ? "text-black" : "text-white"
        }`}
      >
        {title} ({notes.length})
      </h4>
      {isActive ? (
        <ChevronRight fill="black" className="black" />
      ) : (
        <ChevronDown fill="white" className="text-white" />
      )}
    </li>
  );
};

export default React.memo(CategoryItem);
