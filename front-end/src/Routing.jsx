import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/HomePage/Home";
import AskQuestion from "./components/AskQuestionPage/AskQuestion";
import QuestionDetail from "./components/QuestionDetailPage/QuestionDetail";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        {/* <Route path="/createAccount" element={<CreateAccount />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/how-it-works" element={<HowItWorks />} /> */}
        <Route path="/askQuestion" element={<AskQuestion />} />
        <Route path="/askQuestion/:id" element={<QuestionDetail />} />
      </Routes>
    </Router>
  );
};

export default Routing;
