import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/HomePage/Home";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import QuestionDetailPage from "./components/QuestionDetailPage/QuestionDetail";
import AskQuestion from "./components/AskQuestionPage/AskQuestion";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/:id" element={<QuestionDetailPage />} />
        <Route path="/ask" element={<AskQuestion />} />
      </Routes>
    </Router>
  );
};

export default Routing;
