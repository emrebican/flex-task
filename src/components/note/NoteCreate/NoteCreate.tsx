import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCategories } from "@/context/Category.context";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NoteCreate: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCategories();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  function onCreate(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newNote = {
      title,
      content,
    };

    console.log(newNote);
    dispatch({
      type: "CREATE_NOTE",
      payload: { categoryId: categoryId as string, note: newNote },
    });

    setTitle("");
    setContent("");
    navigateBack();
  }

  function navigateBack() {
    navigate(`/${categoryId}/notes`);
  }

  return (
    <Card className="grow relative">
      <Button
        type="button"
        size="icon"
        className="bg-flex_cyan hover:bg-flex_blue p-2 absolute right-5 top-5"
        onClick={navigateBack}
      >
        <Icon name="x" fill="none" />
      </Button>

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
