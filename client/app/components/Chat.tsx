"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { SendHorizontal, BotMessageSquare, User } from "lucide-react";
import axios from "axios";

interface UserLlmChat {
  aiMsg: string;
  userPrompt: string;
}

const Chat = () => {
  const [message, setMessage] = React.useState<string>("");
  const [chat, setChat] = React.useState<UserLlmChat[]>([]);

  async function sendPromptToLlm() {
    try {
      setChat((prev) => [...prev, { aiMsg: "", userPrompt: message }]);

      const response = await axios.post("http://localhost:8000/chat", {
        prompt: message,
      });

      const aiMessage = response.data.aiMsg;

      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          aiMsg: aiMessage,
        };
        return updated;
      });

      setMessage("");
    } catch (error) {
      console.log("ERROR while chatting with llm", error);
    }
  }

  return (
    <div className="h-screen w-full bg-[#0f172a] flex flex-col">
      <h2 className="text-2xl font-bold text-white  border-b border-slate-700 px-4 py-2">
        Chat
      </h2>

      {/* Scrollable chat area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8">
        {chat.map(({ aiMsg, userPrompt }, index) => (
          <div key={index} className="space-y-4">
            {/* User Message */}
            <div className="flex justify-end items-start gap-2">
              <div className="bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                <User size={18} />
              </div>
              <div className="bg-slate-600 text-white px-4 py-2 rounded-2xl max-w-[70%]">
                {userPrompt}
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-2">
              <div className="bg-slate-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                <BotMessageSquare size={18} />
              </div>
              <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-[70%]">
                {aiMsg}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Input Bar */}
      <div className="sticky bottom-0 left-0 w-full bg-slate-800 p-4 border-t border-slate-700">
        <div className="flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your query..."
            className="flex-1 text-white bg-slate-700 border-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendPromptToLlm}
            className="p-2 bg-slate-600 hover:bg-blue-700 text-white rounded-full transition"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
