import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

import { useCategories } from "@/hooks/use-categories"; 
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import NoteUpdate from "../NoteUpdate/NoteUpdate";
import { Check, Trash, X } from "lucide-react";
import { ActionsEnum } from "@/constants/actions.constants";

const NoteDetail: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { categoryId, noteId } = useParams();
  const { categories, dispatch } = useCategories();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const category = categories.find((category) => category.id === categoryId);
  const noteDetail = category?.notes.find((note) => note.id === noteId);

  function onDelete() {
    if (categoryId && noteId) {
      dispatch({
        type: ActionsEnum.REMOVE_NOTE,
        payload: { categoryId, noteId },
      });
      navigateBack();
      toast({
        variant: "destructive",
        title: "Note",
        description: "Note deleted.",
      });
    }
  }

  function navigateBack() {
    navigate(`/${categoryId}/notes`);
  }

  return (
    <Card className="flex-1 relative p-5">
      <div className="flex flex-col h-full">
        <>
          <header className="font-semibold text-black mr-9 break-all">
            {noteDetail?.title}
          </header>
          <Separator className="my-5" />
          <p className="font-normal text-black mb-4 break-all">{noteDetail?.content}</p>
        </>

        {/* Action Buttons */}
        <div className="w-full flex items-center justify-between mt-auto">
          <Button
            type="submit"
            className="bg-flex_red flex justify-between py-0 pl-4 pr-2 hover:bg-flex_darkred"
            onClick={onDelete}
          >
            <span className="grow pr-4">Delete Note</span>
            <Separator
              orientation="vertical"
              className="h-full mr-1 bg-flex_darkred"
            />
            <Trash fill="white" />
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="bg-flex_green flex justify-between py-0 pl-4 pr-2 hover:bg-flex_darkgreen"
              >
                <span className="grow pr-4">Edit Note</span>
                <Separator
                  orientation="vertical"
                  className="h-full mr-1 bg-flex_darkgreen"
                />
                <Check />
              </Button>
            </DialogTrigger>

            {isDialogOpen && (
              <NoteUpdate
                noteDetail={noteDetail}
                closeDialog={() => setIsDialogOpen(false)}
              />
            )}
          </Dialog>
        </div>
      </div>

      <Button
        type="button"
        size="icon"
        className="bg-flex_cyan hover:bg-flex_blue p-2 absolute right-2.5 top-2.5"
        onClick={navigateBack}
      >
        <X />
      </Button>
    </Card>
  );
};

export default NoteDetail;
