import { TProjectsActions } from "../actions/getProjects";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../store";
import { TCreateProjectActions } from "../actions/createProject";
import { TProjectActions } from "../actions/getProject";
import { TCreateTaskActions } from "../actions/createTask";
import { Priority } from "../../components/forms/checkbox-form";

type TApplicationActions =
  | TProjectsActions
  | TCreateProjectActions
  | TProjectActions
  | TCreateTaskActions;

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
export type TaskType = {
  date: Date;
  desc: string;
  taskNumber: number;
  name: string;
  priority: Priority;
};

export type ProjectType = {
  create: Date;
  name: string;
  logo: string;
  tasks?: TaskType[];
};
