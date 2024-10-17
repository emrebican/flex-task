import { NoteModel } from "./Note.model";

export interface CategoryModel {
  id?: string;
  title: string;
  notes: NoteModel[];
}
