import axios from "axios";

const API_BASE_URL = "http://localhost:5500/api"; // Replace with the backend URL

export const fetchQuestions = () => axios.get(`${API_BASE_URL}/questions`);
export const fetchQuestionDetails = (id) =>
  axios.get(`${API_BASE_URL}/questions/${id}`);
export const createQuestion = (questionData) =>
  axios.post(`${API_BASE_URL}/questions`, questionData);
