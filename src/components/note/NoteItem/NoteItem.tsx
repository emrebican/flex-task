import { NoteModel } from "@/models/Note.model";
import { useNavigate, useParams } from "react-router-dom";

const NoteItem: React.FC<{ note: NoteModel }> = ({ note }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/${categoryId}/notes/${note.id}/detail`);
  }

  return (
    <li onClick={handleNavigate}>
      <h4 className="font-semibold text-black">{note.title}</h4>
      <p className="text-black">{note.content}</p>
    </li>
  );
};

export default NoteItem;
