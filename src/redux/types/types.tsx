import { TProjectsActions } from "../actions/getProjects";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../store";
import { TCreateProjectActions } from "../actions/createProject";

type TApplicationActions = TProjectsActions | TCreateProjectActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
