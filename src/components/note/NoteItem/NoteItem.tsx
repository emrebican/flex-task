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
      className={`p-0 cursor-pointer pt-2 ml-1 inline-block w-[200px]" ${
        isActive ? "bg-flex_bglight" : "bg-transparent"
      }`}
    >
      <h4 className="px-2 font-semibold text-black line-clamp-1">{note.title}</h4>
      <p className="px-2 text-black line-clamp-1">{note.content}</p>
      <hr className="mt-2" />
    </div>
  );
};

export default NoteItem;
