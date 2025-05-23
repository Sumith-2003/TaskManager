import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" }); // Replace with your backend URL if different

// Authentication APIs
export const login = async (data) => {
  try {
    const response = await API.post("/auth/login", data);
    return response;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error;
  }
};

export const register = (data) => API.post("/auth/register", data);

// Task APIs
export const fetchUserTasks = async (userId) => {
  if (!userId) {
    console.error("Error: fetchUserTasks was called without a userId!");
    return;
  }
  return await API.get(`/tasks/user/${userId}`);
};

export const fetchTasks = () => API.get("/tasks");
export const addTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

// Comment APIs
export const addComment = (taskId, commentData) =>
  API.post(`/tasks/${taskId}/comment`, commentData);

// User APIs
export const fetchUsers = () => API.get("/users");

// Meeting APIs
export const fetchMeetings = async () => {
  try {
    const response = await API.get("/meetings");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch meetings:", error.message);
    throw new Error("Failed to fetch meetings");
  }
};

export const addMeeting  = async (meetingData) => {
  try {
    const response = await API.post("/meetings", meetingData);
    return response.data;
  } catch (error) {
    console.error("Failed to create meeting:", error.message);
    throw new Error("Failed to create meeting");
  }
};
