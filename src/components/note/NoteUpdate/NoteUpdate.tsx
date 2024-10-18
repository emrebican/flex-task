import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { NoteModel } from "@/models/Note.model";

const NoteUpdate: React.FC<{ noteDetail?: NoteModel }> = ({ noteDetail }) => {
  function onUpdate(event: React.FormEvent) {
    event.preventDefault();
    console.log(noteDetail);
  }

  return (
    <DialogContent className="sm:max-w-[500px] sm:min-h-[350px]">
      <DialogHeader>
        <DialogTitle>Edit Note</DialogTitle>
        <DialogDescription>
          Make changes note. Click save changes when you're done.
        </DialogDescription>
      </DialogHeader>
      <form className="grid gap-4" onSubmit={onUpdate}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            type="text"
            placeholder="Add a title"
            className="col-span-3"
            value={noteDetail?.title}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="content" className="text-right">
            Content
          </Label>
          <Textarea
            placeholder="Write your note here..."
            style={{ height: "calc(100% - 120px)" }}
            className="col-span-3 min-h-[100px]"
            value={noteDetail?.content}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <Button type="submit" className="bg-flex_green hover:bg-flex_darkgreen">
          Save Changes
        </Button>
      </form>
    </DialogContent>
  );
};

export default NoteUpdate;
