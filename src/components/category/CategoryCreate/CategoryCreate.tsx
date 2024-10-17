import React, { useEffect, useRef, useState } from "react";
import { useCategories } from "@/context/Category.context";

import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { CategoryModel } from "@/models/Category.model";

const CategoryCreate: React.FC = () => {
  const { dispatch } = useCategories();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isCreate, setIsCreate] = useState(false);
  const [newCategory, setNewCategory] = useState<CategoryModel>({
    id: Date.now(),
    title: "",
    notes: [],
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, [isCreate]);

  function onCreate(event: React.FormEvent) {
    event.preventDefault();

    if (newCategory.title.trim()) {
      dispatch({ type: "CREATE_CATEGORY", payload: newCategory });
      setNewCategory({
        id: Date.now(),
        title: "",
        notes: [],
      });
    }
  }

  return (
    <div className="mb-2.5">
      {isCreate ? (
        <form
          onSubmit={onCreate}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Add a title..."
            className="bg-flex_inputbg border-none"
            ref={inputRef}
            value={newCategory.title}
            onChange={(event) =>
              setNewCategory({ ...newCategory, title: event.target.value })
            }
          />
          <Button
            type="submit"
            size="icon"
            className="bg-flex_green hover:bg-flex_darkgreen p-2"
          >
            <Icon name="check" fill="none" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="bg-flex_red hover:bg-flex_darkred p-2"
            onClick={() => setIsCreate(false)}
          >
            <Icon name="x" fill="none" />
          </Button>
        </form>
      ) : (
        <Button
          className="w-full bg-flex_green flex justify-between py-0 px-2 hover:bg-flex_darkgreen"
          onClick={() => setIsCreate(true)}
        >
          <span className="grow">Create Category</span>
          <Separator
            orientation="vertical"
            className="h-full mr-1 bg-flex_darkgreen"
          />
          <Icon name="plus" />
        </Button>
      )}
    </div>
  );
};

export default CategoryCreate;
