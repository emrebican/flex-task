import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "@/context/Category.context";

import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/Loading/loading";

import NoteItem from "../NoteItem/NoteItem";
import NoteCreate from "../NoteCreate/NoteCreate";

const NoteList: React.FC = () => {
  const { categoryId } = useParams();
  const { categories } = useCategories();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useMemo
  const selectedCategory = useMemo(
    () => categories.find((cat) => cat.id === Number(categoryId)),
    [categories, categoryId]
  );

  const filteredNotes = useMemo(() => {
    if (!selectedCategory) return [];

    const searchLower = search.trim().toLowerCase();

    return selectedCategory.notes.filter((note) =>
      note.title.toLowerCase().includes(searchLower)
    );
  }, [search, selectedCategory]);

  // reset search input
  useEffect(() => {
    setSearch("");
  }, [categoryId]);

  // DEBOUNCING
  useEffect(() => {
    if (!selectedCategory) return;

    setIsLoading(true);

    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [search, selectedCategory]);

  if (!selectedCategory) return <div>No category found!</div>;

  return (
    <Card className="grow">
      {selectedCategory.notes.length === 0 ? (
        <p className="text-muted-foreground">
          There is no notes for this category.
        </p>
      ) : (
        <>
          <div className="max-w-[480px] flex items-center gap-2.5 mb-5">
            <NoteCreate />
            <Input
              type="text"
              placeholder="Search..."
              className="bg-flex_fc placeholder:text-flex_ea border-flex_ea font-semibold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {isLoading ? (
            <Loading />
          ) : filteredNotes.length === 0 ? (
            <p className="text-muted-foreground">No notes found.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {filteredNotes.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </ul>
          )}
        </>
      )}
    </Card>
  );
};

export default NoteList;
