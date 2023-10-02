import { TSetSearchValueAction } from "../../actions/setSearchValue";
import { SET_SEARCH_VALUE } from "../../constants/constants";

export type TSearchValueState = {
  searchValue: string;
};
const initialState: TSearchValueState = {
  searchValue: "",
};
export const SetSearchValueReducer = (
  state = initialState,
  action: TSetSearchValueAction,
): TSearchValueState => {
  switch (action.type) {
    case SET_SEARCH_VALUE: {
      return { ...state, searchValue: action.payload.searchValue };
    }
    default: {
      return state;
    }
  }
};
