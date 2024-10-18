import { CategoryModel } from "@/models/Category.model";
import { NoteModel } from "@/models/Note.model";
import { v4 as uuidV4 } from "uuid";

export type CategoryActions =
  | {
      type: "CREATE_CATEGORY";
      payload: CategoryModel;
    }
  | { type: "REMOVE_CATEGORY"; id: string }
  | { type: "CREATE_NOTE"; payload: { categoryId: string; note: NoteModel } };

export const categoryReducer = (
  state: CategoryModel[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [...state, { id: uuidV4(), ...action.payload }];

    case "REMOVE_CATEGORY":
      return state.filter((item: CategoryModel) => item.id !== action.id);

    case "CREATE_NOTE":
      return state.map((item: CategoryModel) =>
        item.id === action.payload.categoryId
          ? {
              ...item,
              notes: [...item.notes, { id: uuidV4(), ...action.payload.note }],
            }
          : item
      );

    default:
      return state;
  }
};
