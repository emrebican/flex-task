import React, { useState } from "react";

import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NoteCreate: React.FC = () => {
  const [isCreate, setIsCreate] = useState(false);

  return (
    <div>
      {isCreate ? (
        "note create inputs"
      ) : (
        <Button
          className="w-[218px] bg-flex_green flex justify-between py-0 px-2 hover:bg-flex_darkgreen"
          onClick={() => setIsCreate(true)}
        >
          <span className="grow">Create Note</span>
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

export default NoteCreate;
