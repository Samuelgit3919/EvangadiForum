import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuestion } from "../../API/axios"; // Ensure this service exists to post questions

const AskQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username] = useState("test_user"); // Replace with real user info later
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createQuestion({ title, description, username });
      alert("Question posted successfully!");
      navigate("/home"); // Redirect to the home page after posting
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <div>
      <h1>Ask a New Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={200}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Question</button>
      </form>
    </div>
  );
};

export default AskQuestionPage;
