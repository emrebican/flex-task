import React, { useState } from "react";

import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const CategoryCreate: React.FC = () => {
  const [isCreate, setIsCreate] = useState(false);

  return (
    <div className="mb-2.5">
      {isCreate ? (
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Add a title..."
            className="bg-flex_inputbg border-none"
          />
          <Button
            type="button"
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
        </div>
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
