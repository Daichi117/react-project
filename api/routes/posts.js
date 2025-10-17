import express from "express"

const router = express.Router();

// Basic test route
router.get("/", (req, res) => {
  res.json("Posts route is working");
});

export default router