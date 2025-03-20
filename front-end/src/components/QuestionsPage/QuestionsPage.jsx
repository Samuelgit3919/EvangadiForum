import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchQuestions } from "../../API/axios"; // Ensure this service exists to interact with the backend

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetchQuestions();
        setQuestions(response.data); // Assuming the backend returns questions as an array
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    loadQuestions();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <Link to="/ask" style={{ display: "block", marginBottom: "1rem" }}>
        Ask a Question
      </Link>
      <ul>
        {questions.map((question) => (
          <li key={question.question_id}>
            <Link to={`/questions/${question.question_id}`}>
              {question.title}
            </Link>
            <small> (By: {question.username})</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsPage;
