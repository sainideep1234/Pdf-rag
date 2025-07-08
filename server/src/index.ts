import express from "express";
import { upload } from "./utils/uploadfile";

import cors from "cors";

import errorHandler from "./middleware/errorhandler";
import fileUpload from "./controllers/fileUpload.controller";
import chatWithLlm from "./controllers/chatWithLlm";

const app = express();

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.post("/upload/pdf", upload.single("pdf"), fileUpload);

app.post("/chat", chatWithLlm);

app.listen(8000, () => {
  console.log(`server is running on port: ${8000}`);
});
