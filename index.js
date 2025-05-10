import express from "express";
import env from "dotenv";
import cors from "cors";

const app = express();
env.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
