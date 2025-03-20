import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5050", // Replace this with your backend server URL (API)
  withCredentials: true, // Use this if your backend needs to handle cookies or sessions
});

export default instance;
