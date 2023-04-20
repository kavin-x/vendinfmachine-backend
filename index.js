import pkg from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import Routes from "./routes/routes.js";

import connectMqtt from "./config/mqtt.js";

connectMqtt()

dotenv.config();
const app = pkg();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/", Routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});