import { SET_SEARCH_VALUE } from "../constants/constants";

export type TSetSearchValueAction = {
  readonly type: typeof SET_SEARCH_VALUE;
  payload: { searchValue: string };
};
export const SetSearchValue = (searchValue: string): TSetSearchValueAction => {
  return {
    type: SET_SEARCH_VALUE,
    payload: { searchValue: searchValue },
  };
};
