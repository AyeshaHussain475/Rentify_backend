import express from "express";
import env from "dotenv";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();
env.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/rentify", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
