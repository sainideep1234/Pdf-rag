import { CohereEmbeddings } from "@langchain/cohere";
import "dotenv/config";

export const embeddings = new CohereEmbeddings({
  model: "embed-english-v3.0",
  apiKey: process.env.EMBEDDING_KEY,
});
