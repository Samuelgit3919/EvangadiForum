const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controller/questionController");

// Get all questions
router.get("/", getAllQuestions);

// Get question details by ID
router.get("/:id", getQuestionById);

// Create a new question
router.post("/", createQuestion);

// Update a question
router.put("/:id", updateQuestion);

// Delete a question
router.delete("/:id", deleteQuestion);

module.exports = router;
