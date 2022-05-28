import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    message: "User created succssfully",
  });
});

export default router;
