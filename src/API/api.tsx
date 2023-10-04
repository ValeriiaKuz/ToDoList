import axios from "axios";
import { Status } from "../servicies/redux/types/types";

export const baseURL =
  "https://todo-64cdf-default-rtdb.europe-west1.firebasedatabase.app/";
export const axiosRequest = axios.create({
  baseURL: baseURL,
});

export const projectsRequest = async (): Promise<any> => {
  try {
    return await axiosRequest.get(`projects.json`);
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};
export const createProject = async (
  name: any,
  createTime: Date,
  logo: string,
): Promise<any> => {
  try {
    return await axiosRequest.post(`projects.json`, {
      name: name,
      create: createTime,
      logo: logo,
    });
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};

export const projectRequest = async (id: string): Promise<any> => {
  try {
    return await axiosRequest.get(`projects/${id}.json`);
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};

export const createTask = async (
  idProject: string,
  name: string,
  desc: string,
  priority: string,
  date: Date,
  taskNumber: number,
  status: Status,
): Promise<any> => {
  try {
    return await axiosRequest.post(`projects/${idProject}/tasks.json`, {
      name: name,
      desc: desc,
      priority: priority,
      date: date,
      taskNumber: taskNumber,
      status: status,
    });
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};
export const changeStatus = async (
  projectId: string,
  taskId: string,
  status: Status,
): Promise<any> => {
  try {
    return await axiosRequest.patch(
      `projects/${projectId}/tasks/${taskId}.json`,
      { status: status },
    );
  } catch (error) {
    console.error("Error changing status: ", error);
    throw error;
  }
};
export const addDoneDate = async (
  projectId: string,
  taskId: string,
  doneTime: Date,
): Promise<any> => {
  try {
    return await axiosRequest.patch(
      `projects/${projectId}/tasks/${taskId}.json`,
      { doneTime: doneTime },
    );
  } catch (error) {
    console.error("Error adding doneTime: ", error);
    throw error;
  }
};
export const addInProgressDate = async (
  projectId: string,
  taskId: string,
  startProgressTime: Date,
): Promise<any> => {
  try {
    return await axiosRequest.patch(
      `projects/${projectId}/tasks/${taskId}.json`,
      { startProgressTime: startProgressTime },
    );
  } catch (error) {
    console.error("Error adding startProgressTime: ", error);
    throw error;
  }
};
