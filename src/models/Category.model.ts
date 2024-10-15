import { NoteModel } from "./Note.model";

export interface CategoryModel {
  id: number;
  title: string;
  notes: NoteModel[];
}
