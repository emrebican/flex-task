import { NoteModel } from "@/models/Note.model";

const NoteItem: React.FC<{ note: NoteModel }> = ({ note }) => {
  return (
    <li className="text-flex_black">
      <h4 className="font-semibold">{note.title}</h4>
      <p>{note.content}</p>
    </li>
  );
};

export default NoteItem;
