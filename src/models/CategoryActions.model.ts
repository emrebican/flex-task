import { ActionsEnum } from "@/constants/actions.constants";
import { NoteModel } from "./Note.model";
import { CategoryModel } from "./Category.model";

export type CategoryActions =
  | {
      type: ActionsEnum.CREATE_CATEGORY;
      payload: CategoryModel;
    }
  | { type: ActionsEnum.REMOVE_CATEGORY; id: string }
  | {
      type: ActionsEnum.CREATE_NOTE;
      payload: { categoryId: string; note: NoteModel };
    }
  | {
      type: ActionsEnum.REMOVE_NOTE;
      payload: { categoryId: string; noteId: string };
    }
  | {
      type: ActionsEnum.UPDATE_NOTE;
      payload: { categoryId: string; noteId: string; note: NoteModel };
    };
