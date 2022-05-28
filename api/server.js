import "dotenv/config";
// to convert .env file into environment variable
import express from "express";

// db connection
import createConnection from "./src/config/dbConfig.js";
createConnection();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// load middleware

import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/users", userRouter);

// app.use("/api/v1/users", () => {
//   res.send("Req Received");
// });
//for front end content
app.get("/", (req, res) => {
  res.send("React app");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on ${PORT}`);
});
