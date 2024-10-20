import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useCategories } from "@/hooks/use-categories";
import { useToast } from "@/hooks/use-toast";

import Card from "@/components/ui/card";
import NoteItem from "../NoteItem/NoteItem";
import NoteCreate from "../NoteCreate/NoteCreate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loading from "@/components/ui/Loading/Loading";

import { Plus, Search, Trash } from "lucide-react";
import { ActionsEnum } from "@/constants/actions.constants";

const NoteList: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { toast } = useToast();
  const { categories, dispatch } = useCategories();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useMemo
  const selectedCategory = useMemo(
    () => categories.find((cat) => cat.id === categoryId),
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

  function onRemoveCategory() {
    dispatch({ type: ActionsEnum.REMOVE_CATEGORY, id: categoryId as string });

    toast({
      variant: "destructive",
      title: "Category",
      description: "Category deleted.",
    });

    navigate("/");
  }

  if (!selectedCategory) return null;

  return (
    <React.Fragment>
      {selectedCategory.notes.length === 0 ? (
        <NoteCreate />
      ) : (
        <div className="w-full h-full flex flex-col md:flex-row flex-wrap gap-2.5">
          <Card className="grow flex-1 min-w-[350px] relative">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2.5 mb-5">
              {/* Create Note */}
              <Button
                className="w-full xl:w-[218px] bg-flex_green flex justify-between py-0 px-2 hover:bg-flex_darkgreen"
                onClick={() => navigate(`/${categoryId}/note-create`)}
              >
                <span className="grow">Create Note</span>
                <Separator
                  orientation="vertical"
                  className="h-full mr-1 bg-flex_darkgreen"
                />
                <Plus />
              </Button>
              {/* Search notes */}
              <div className="relative flex items-center xl:w-[252px] w-[calc(100%-46px)]">
                <Search className="absolute left-3 text-flex_ea" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className=" bg-flex_fc placeholder:text-flex_ea border-flex_ea font-semibold pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <Button
                type="button"
                size="icon"
                className="bg-flex_red hover:bg-flex_darkred p-2 ml-auto"
                onClick={onRemoveCategory}
              >
                <Trash fill="white" />
              </Button>
            </div>

            {isLoading ? (
              <Loading />
            ) : filteredNotes.length === 0 ? (
              <p className="text-muted-foreground">No notes found.</p>
            ) : (
              <ul className="flex flex-col">
                {filteredNotes.map((note) => (
                  <NoteItem key={note.id} note={note} />
                ))}
              </ul>
            )}
          </Card>

          {/* Note Detail */}
          <Outlet />
        </div>
      )}
    </React.Fragment>
  );
};

export default NoteList;
