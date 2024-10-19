import React, { useEffect, useRef, useState } from "react";
import { useCategories } from "@/hooks/use-categories";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { CategoryModel } from "@/models/Category.model";
import { ActionsEnum } from "@/constants/actions.constants";
import { Check, Plus, X } from "lucide-react";

const CategoryCreate: React.FC = () => {
  const { toast } = useToast();
  const { dispatch } = useCategories();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isCreate, setIsCreate] = useState(false);
  const [newCategory, setNewCategory] = useState<CategoryModel>({
    title: "",
    notes: [],
  });

  const isFormValid = newCategory.title.trim() !== "";

  useEffect(() => {
    inputRef.current?.focus();
  }, [isCreate]);

  function onCreate(event: React.FormEvent) {
    event.preventDefault();

    if (newCategory.title.trim()) {
      dispatch({ type: ActionsEnum.CREATE_CATEGORY, payload: newCategory });
      setIsCreate(false);
      setNewCategory({
        title: "",
        notes: [],
      });

      toast({
        title: "Category",
        description: "A new category created.",
      });
    }
  }

  function onCancel() {
    setIsCreate(false);
    setNewCategory({
      title: "",
      notes: [],
    });
  }

  return (
    <div>
      {isCreate ? (
        <form
          onSubmit={onCreate}
          className="flex w-full items-center space-x-2"
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
            disabled={!isFormValid}
          >
            <Check />
          </Button>
          <Button
            type="button"
            size="icon"
            className="bg-flex_red hover:bg-flex_darkred p-2"
            onClick={onCancel}
          >
            <X />
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
          <Plus />
        </Button>
      )}
    </div>
  );
};

export default CategoryCreate;
