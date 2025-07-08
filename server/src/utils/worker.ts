import { Worker } from "bullmq";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { createVectorEmbeddings } from "./vectorstore";
import fs from "fs";
import { promisify } from "util";
const unlinkAsync = promisify(fs.unlink);

export const deleteTheFileFromServer = async (filePath: string) => {
  await unlinkAsync(filePath);
};

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    const data = JSON.parse(job.data);

    const loader = new PDFLoader(data.destination);
    const docs = await loader.load();
    await createVectorEmbeddings(docs);

    console.log(`all docs are uploaded to vector store `);

    //code to delte he fiel from server

    await deleteTheFileFromServer(data.destination);
    console.log("file delte succesfully");
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: 6379,
    },
  },
);

export default worker;
