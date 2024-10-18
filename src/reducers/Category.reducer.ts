import { ActionsEnum } from "@/constants/actions.constants";
import { CategoryModel } from "@/models/Category.model";
import { NoteModel } from "@/models/Note.model";
import { v4 as uuidV4 } from "uuid";

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

export const categoryReducer = (
  state: CategoryModel[],
  action: CategoryActions
) => {
  switch (action.type) {
    case ActionsEnum.CREATE_CATEGORY:
      return [...state, { id: uuidV4(), ...action.payload }];

    case ActionsEnum.REMOVE_CATEGORY:
      return state.filter(
        (category: CategoryModel) => category.id !== action.id
      );

    case ActionsEnum.CREATE_NOTE:
      return state.map((category: CategoryModel) =>
        category.id === action.payload.categoryId
          ? {
              ...category,
              notes: [
                ...category.notes,
                { id: uuidV4(), ...action.payload.note },
              ],
            }
          : category
      );

    case ActionsEnum.REMOVE_NOTE:
      return state.map((category: CategoryModel) =>
        category.id === action.payload.categoryId
          ? {
              ...category,
              notes: category.notes.filter(
                (note) => note.id !== action.payload.noteId
              ),
            }
          : category
      );

    case ActionsEnum.UPDATE_NOTE:
      return state.map((category: CategoryModel) =>
        category.id === action.payload.categoryId
          ? {
              ...category,
              notes: category.notes.map((note) =>
                note.id === action.payload.noteId
                  ? { ...note, ...action.payload.note }
                  : note
              ),
            }
          : category
      );

    default:
      return state;
  }
};
