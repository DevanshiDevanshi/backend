import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js";

//Middlewares
app.use(express.json()); // convert the req that was sent to the server to json.
app.use(cors()); // allows some specific domain to access the server, here it's allowing all origins.

app.use("/", routes);

const port = process.env.PORT || 5000;

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
} catch (error) {
  console.log(error);
  throw err;
}
