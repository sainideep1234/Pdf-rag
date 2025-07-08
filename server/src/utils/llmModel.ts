import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { DocumentInterface } from "@langchain/core/documents";
import "dotenv/config";

const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
});

export const LlmModelChat = async (
  context: DocumentInterface<Record<string, any>>[],
  prompt: string,
) => {
  const aiMsg = await llm.invoke([
    [
      "system",
      `You are an expert analyst with deep reasoning skills and a background in engineering and cognitive science.
        Given the following context, your task is to identify what this is, based on all available clues.
        Use logical reasoning, analogies, and engineering-style thinking to explain your answer clearly.
        If something is unclear or ambiguous, make reasonable inferences. Your explanation should feel like a thoughtful human deduction, not just a lookup.
        Keep it concise but insightful, and if relevant, add a metaphor or analogy to deepen understanding. 
        CONTEXT:
        ${context}
        Output Format:
        What this is (in 1-2 lines)
        Why you think so (with reasoning)
        Any alternative interpretations (if applicable)`,
    ],
    ["human", `${prompt}`],
  ]);
  return aiMsg;
};
