import React, { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useCategories } from "@/hooks/use-categories";

import Card from "@/components/ui/card";
import Loading from "@/components/ui/Loading/Loading";
import CategoryCreate from "../CategoryCreate/CategoryCreate";

const CategoryItem = React.lazy(() => import("../CategoryItem/CategoryItem"));

const CategoryList: React.FC = () => {
  const { categories } = useCategories();
  const { categoryId } = useParams();

  return (
    <div className="flex gap-2.5 flex-wrap md:flex-nowrap h-full md:h-[calc(100vh-68px)]">
      <Card className="h-full w-full min-w-[300px] md:w-[480px] overflow-x-hidden overflow-y-hidden md:overflow-y-auto">
        {/* ADD NEW CATEGORY */}
        <CategoryCreate />

        {/* CATEGORY LIST */}

        <ul
          className={`flex flex-col gap-2.5 ${categories.length && "mt-2.5"}`}
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
      <div className="w-full h-full">
        {categoryId ? (
          <Outlet />
        ) : (
          <div className="w-full text-muted-foreground text-center">
            There is no selected category!
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
