import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";
import { QdrantClient } from "@qdrant/js-client-rest";
import { embeddings } from "./embedingmodel";

export const createVectorEmbeddings = async (
  docs: Document<Record<string, any>>[],
) => {
  const client = new QdrantClient({ url: `http://localhost:6333` });
  await QdrantVectorStore.fromDocuments(docs, embeddings, {
    client,
    collectionName: "pdf-docs",
  });
};
