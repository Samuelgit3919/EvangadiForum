import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuestionDetails } from "../../API/axios"; // Ensure this service exists to fetch details

const QuestionDetail = () => {
  const { id } = useParams(); // Retrieves the question ID from the URL
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      try {
        const response = await fetchQuestionDetails(id);
        setQuestion(response.data); // Assuming the backend returns a single question object
      } catch (error) {
        console.error("Error fetching question details:", error);
      }
    };

    loadQuestionDetails();
  }, [id]);

  if (!question) return <p>Loading...</p>;

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      <h3>Answers</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <p>{answer.body}</p>
            <small> (By: {answer.username})</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionDetail;
