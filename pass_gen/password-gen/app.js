import express from "express";
import cors from "cors";
import generatePassword from "./src/pass-generator.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const passwordLength = 24;
  const newPassword = generatePassword(passwordLength);
  console.log(typeof newPassword)
  res.send(newPassword);
});

app.listen(8000, () => console.log("listen on port 8000"));
