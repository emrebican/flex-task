import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useCategories } from "@/hooks/use-categories";

import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

import { Check, Trash, X } from "lucide-react";
import { ActionsEnum } from "@/constants/actions.constants";

const NoteCreate: React.FC = () => {
  const { toast } = useToast();
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, dispatch } = useCategories();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  useEffect(() => {
    // check if category notes array is empty
    const check = categories.find((category) => category.id === categoryId)
      ?.notes.length;

    if (!check) setIsEmpty(true);
  }, [categories, categoryId]);

  function onCreateNote(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newNote = {
      title,
      content,
    };

    dispatch({
      type: ActionsEnum.CREATE_NOTE,
      payload: { categoryId: categoryId as string, note: newNote },
    });

    setTitle("");
    setContent("");
    navigateBack();
    toast({
      title: "Note",
      description: "A new note created.",
    });
  }

  function onRemoveCategory() {
    dispatch({ type: ActionsEnum.REMOVE_CATEGORY, id: categoryId as string });

    toast({
      variant: "destructive",
      title: "Category",
      description: "Category deleted.",
    });

    navigate("/");
  }

  function navigateBack() {
    navigate(`/${categoryId}/notes`);
  }

  return (
    <Card className="grow relative w-full">
      <div className="flex gap-2 absolute right-5 top-5">
        {isEmpty ? (
          <Button
            type="button"
            size="icon"
            className="bg-flex_red hover:bg-flex_darkred p-2"
            onClick={onRemoveCategory}
          >
            <Trash fill="white" />
          </Button>
        ) : (
          <Button
            type="button"
            size="icon"
            className="bg-flex_cyan hover:bg-flex_blue p-2"
            onClick={navigateBack}
          >
            <X fill="none" />
          </Button>
        )}
      </div>

      <form onSubmit={onCreateNote} className="h-full">
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
          style={{ height: "calc(100% - 120px)" }}
          className="p-0 pl-3.5 mb-[80px] border-none shadow-none focus-visible:ring-0"
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
          <Check />
        </Button>
      </form>
    </Card>
  );
};

export default NoteCreate;
