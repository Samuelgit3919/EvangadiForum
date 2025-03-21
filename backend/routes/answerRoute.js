const express = require("express");
const router = express.Router();

// Import the answer controller functions
const {
  getAnswersByQuestionId,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../../backend/controller/answerController");

// Route to fetch all answers for a specific question
// GET /api/answers/:questionId
router.get("/:questionId", getAnswersByQuestionId);

// Route to create a new answer for a specific question
// POST /api/answers/:questionId
router.post("/:questionId", createAnswer);

// Route to update an existing answer
// PUT /api/answers/:id
router.put("/:id", updateAnswer);

// Route to delete an answer
// DELETE /api/answers/:id
router.delete("/:id", deleteAnswer);

module.exports = router;
