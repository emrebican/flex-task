import { NoteModel } from "@/models/Note.model";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const NoteItem: React.FC<{ note: NoteModel }> = ({ note }) => {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive =
    location.pathname === `/${categoryId}/notes/${note.id}/detail`;

  function handleNavigate() {
    navigate(`/${categoryId}/notes/${note.id}/detail`);
  }

  return (
    <div
      onClick={handleNavigate}
      className={`p-0 cursor-pointer mt-2 ${
        isActive ? "bg-flex_bglight" : "bg-transparent"
      }`}
    >
      <h4 className="font-semibold text-black">{note.title}</h4>
      <p className="text-black">{note.content}</p>
      <hr className="mt-2" />
    </div>
  );
};

export default NoteItem;
