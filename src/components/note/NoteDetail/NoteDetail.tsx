import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { useCategories } from "@/context/Category.context";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteUpdate from "../NoteUpdate/NoteUpdate";

const NoteDetail: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId, noteId } = useParams();
  const { categories, dispatch } = useCategories();

  const category = categories.find((category) => category.id === categoryId);
  const noteDetail = category?.notes.find((note) => note.id === noteId);

  useEffect(() => {
    console.log(noteDetail, "DETAIL");
  }, [noteDetail]);

  function onDelete() {
    if (categoryId && noteId) {
      dispatch({
        type: "REMOVE_NOTE",
        payload: { categoryId, noteId },
      });
      navigateBack();
    }
  }

  function navigateBack() {
    navigate(`/${categoryId}/notes`);
  }

  return (
    <Card className="flex-1 relative p-5">
      <div className="flex flex-col h-full">
        <>
          <header className="font-semibold text-black mr-9">
            {noteDetail?.title}
          </header>
          <Separator className="my-5" />
          <p className="font-normal text-black mb-4">{noteDetail?.content}</p>
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
            <Icon name="trash" fill="white" />
          </Button>

          <Dialog>
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
                <Icon name="check" />
              </Button>
            </DialogTrigger>

            <NoteUpdate noteDetail={noteDetail} />
          </Dialog>
        </div>
      </div>

      <Button
        type="button"
        size="icon"
        className="bg-flex_cyan hover:bg-flex_blue p-2 absolute right-5 top-5"
        onClick={navigateBack}
      >
        <Icon name="x" fill="none" />
      </Button>
    </Card>
  );
};

export default NoteDetail;
