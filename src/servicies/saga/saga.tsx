import { projectsRequest } from "../../API/api";
import { GET_PROJECTS_DATA } from "../redux/constants/constants";
import { put, takeEvery, call } from "redux-saga/effects";
import { failedProjects, putProjects } from "../redux/actions/getProjects";

export function* getProjectsAsync() {
  try {
    // @ts-ignore
    const data = yield call(projectsRequest);
    if (data.status === 200) {
      const projectsArray = Object.keys(data.data).map((key) => {
        const project = {
          id: key,
          ...data.data[key],
        };
        if (data.data[key].tasks) {
          project.tasks = Object.keys(data.data[key].tasks).map((taskKey) => ({
            idTask: taskKey,
            ...data.data[key].tasks[taskKey],
          }));
        }
        return project;
      });
      yield put(putProjects(projectsArray));
    } else {
      yield put(failedProjects());
    }
  } catch (error) {
    console.log(error);
    yield put(failedProjects());
  }
}

export function* watchGetProjectsAsync() {
  yield takeEvery(GET_PROJECTS_DATA, getProjectsAsync);
}
