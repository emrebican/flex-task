import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useCategories } from "@/context/Category.context";

import Card from "@/components/ui/card";
import Loading from "@/components/ui/Loading/Loading";
import CategoryCreate from "../CategoryCreate/CategoryCreate";

const CategoryItem = React.lazy(() => import("../CategoryItem/CategoryItem"));

const CategoryList: React.FC = () => {
  const { categories } = useCategories();

  return (
    <div
      className="flex gap-2.5 flex-wrap md:flex-nowrap"
      style={{ height: "calc(100vh - 78px)" }}
    >
      <Card className="h-full w-full md:w-[480px] overflow-x-hidden overflow-y-auto">
        {/* ADD NEW CATEGORY */}
        <CategoryCreate />

        {/* CATEGORY LIST */}

        <ul
          className={`flex flex-col gap-2.5 ${
            categories.length ? "mt-2.5" : null
          }`}
        >
          <Suspense fallback={<Loading />}>
            {categories.map((item) => (
              <CategoryItem
                key={item.id}
                id={item.id}
                title={item.title}
                notes={item.notes}
              />
            ))}
          </Suspense>
        </ul>
      </Card>

      {/* NOTE LIST */}
      <Outlet />
    </div>
  );
};

export default CategoryList;
