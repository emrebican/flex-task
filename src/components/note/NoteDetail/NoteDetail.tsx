import Card from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCategories } from "@/context/Category.context";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const NoteDetail: React.FC = () => {
  const { categoryId, noteId } = useParams();
  const { categories } = useCategories();

  const category = categories.find((category) => category.id === categoryId);
  const noteDetail = category?.notes.find((note) => note.id === noteId);

  useEffect(() => {
    console.log(noteDetail, "DETAIL");
  }, [noteDetail]);

  return (
    <Card className="flex-1">
      <header className="font-semibold text-black">{noteDetail?.title}</header>
      <Separator className="my-5" />
      <p className="font-normal text-black">{noteDetail?.content}</p>

      {/* Action Buttons */}
      <div></div>
    </Card>
  );
};

export default NoteDetail;
