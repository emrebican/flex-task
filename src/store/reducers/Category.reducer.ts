import { v4 as uuidV4 } from "uuid";
import { ActionsEnum } from "@/constants/actions.constants";
import { CategoryModel } from "@/models/Category.model";
import { CategoryActions } from "@/models/CategoryActions.model";

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
