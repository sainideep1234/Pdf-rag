import { QdrantVectorStore } from "@langchain/qdrant";
import { Request, Response } from "express";
import { embeddings } from "../utils/embedingmodel";
import { LlmModelChat } from "../utils/llmModel";

const chatWithLlm = async (req: Request, res: Response) => {
  try {
    const userQuery = req.body.prompt;

    if (!userQuery) {
      res.send("No Prompt");
      return;
    }

    const vectorStore = await QdrantVectorStore.fromExistingCollection(
      embeddings,
      {
        url: `http://localhost:6333`,
        collectionName: "pdf-docs",
      },
    );

    const pdfContext = await vectorStore.similaritySearch(userQuery, 5);

    const aiMsg = await LlmModelChat(pdfContext, userQuery);

    res.json({
      aiMsg: aiMsg.content,
      msg: "successfull",
    });
    return;
  } catch (error) {
    console.log("SERVVER ERROR: ", error);
  }
};

export default chatWithLlm;
