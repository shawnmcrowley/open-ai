"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex justify-center rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          Generative AI Information Assistant
        </div>
        <div className="flex flex-col w-full max-w-xl py-24 mx-auto stretch">
          <form onSubmit={handleSubmit}>
            <input
              className="fixed top-12 w-full max-w-xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="What Information Are You Looking For?"
              onChange={handleInputChange}
            />
          </form>
        </div>
        {messages.map((m) => (
          <div key={m.id} className="text-gray-700 whitespace-pre-wrap">
            <b>{m.role === "user" ? "User: " : "AI: "}</b>
            {m.content}
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}
