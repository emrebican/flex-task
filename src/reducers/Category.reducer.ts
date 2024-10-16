import { CategoryModel } from "@/models/Category.model";

export type CategoryActions =
  | {
      type: "CREATE_CATEGORY";
      payload: CategoryModel;
    }
  | { type: "REMOVE_CATEGORY"; id: number };

export const categoryReducer = (
  state: CategoryModel[],
  action: CategoryActions
) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [...state, { ...action.payload }];

    case "REMOVE_CATEGORY":
      return state.filter((item: CategoryModel) => item.id !== action.id);

    default:
      return state;
  }
};
