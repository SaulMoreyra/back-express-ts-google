import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";

const app: Application = express();
const port = Number(process.env.PORT) || 8081;

app.use(cors());
app.set("port", port);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
