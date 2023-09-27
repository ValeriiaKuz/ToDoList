import axios from "axios";

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
): Promise<any> => {
  try {
    return await axiosRequest.post(`projects.json`, {
      name: name,
      create: createTime,
    });
  } catch (error) {
    console.error("Error fetching projects: ", error);
    throw error;
  }
};
