import { CategoryModel } from "@/models/Category.model";
import { v4 as uuidV4 } from "uuid";

export type CategoryActions =
  | {
      type: "CREATE_CATEGORY";
      payload: CategoryModel;
    }
  | { type: "REMOVE_CATEGORY"; id: string };

export const categoryReducer = (
  state: CategoryModel[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [...state, { id: uuidV4(), ...action.payload }];

    case "REMOVE_CATEGORY":
      return state.filter((item: CategoryModel) => item.id !== action.id);

    default:
      return state;
  }
};
