const express = require("express");
const {
  getAllUsers,
  getUser,
  loginUser,
  createUser,
  
} = require('../controllers/entreces-controller');

const router = express.Router();

router.get("/api/users", getAllUsers);

router.get("/api/user/:id", getUser);

router.post("/api/auth/login", loginUser);

router.post("/api/auth/signup", createUser);

module.exports = router;
          