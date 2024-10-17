import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidV4 } from "uuid";

const NoteCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  function onCreate(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: uuidV4(),
      title,
      content,
    };

    console.log(newNote);
    setTitle("");
    setContent("");
  }

  return (
    <Card className="grow relative">
      <form onSubmit={onCreate}>
        <Input
          type="text"
          placeholder="Add a title"
          className="p-0 pl-3.5 border-none shadow-none focus-visible:ring-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef}
        />

        <Separator className="my-4" />

        <Textarea
          placeholder="Write your note here..."
          className="p-0 pl-3.5 border-none shadow-none focus-visible:ring-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          type="submit"
          disabled={!isFormValid}
          className="bg-flex_green flex justify-between py-0 pl-4 pr-2 hover:bg-flex_darkgreen absolute bottom-5 right-5"
        >
          <span className="grow pr-4">Save Changes</span>
          <Separator
            orientation="vertical"
            className="h-full mr-1 bg-flex_darkgreen"
          />
          <Icon name="check" />
        </Button>
      </form>
    </Card>
  );
};

export default NoteCreate;
