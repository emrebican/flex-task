import Card from "@/components/ui/card";
import { useCategories } from "@/context/Category.context";
import { CategoryModel } from "@/models/Category.model";
import { useParams } from "react-router-dom";
import NoteItem from "../NoteItem/NoteItem";

const NoteList: React.FC = () => {
  const { categoryId } = useParams();
  const { categories } = useCategories();

  const selectedCategory = categories.find(
    (cat: CategoryModel) => cat.id === Number(categoryId)
  );

  if (!selectedCategory) {
    return <div>No category found</div>;
  }

  return (
    <Card className="grow">
      <ul>
        {selectedCategory.notes.length === 0 ? (
          <p className="text-muted-foreground">
            There is no notes for this Category
          </p>
        ) : (
          selectedCategory.notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))
        )}
      </ul>
    </Card>
  );
};

export default NoteList;
