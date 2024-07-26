const express = require("express");
const {
  getAllUsers,
  getUser,
  loginUser,
  createUser,
  
} = require('../controllers/entreces-controller');

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", loginUser);

router.post("/api/auth/signup", createUser);

module.exports = router;
