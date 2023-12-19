import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
import routes from "./src/routes/index.js";

//Middleware
app.use(express.json());
app.use(cors());

app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
