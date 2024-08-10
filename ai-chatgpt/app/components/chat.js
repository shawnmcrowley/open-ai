"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex justify-center rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="flex flex-col w-full max-w-xl py-24 mx-auto stretch">
          <form onSubmit={handleSubmit}>
            <input
              className="fixed top-15 w-full max-w-xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="What Information Are You Looking For?"
              onChange={handleInputChange}
            />
          </form>
        </div>
        <a href="#" className="block max-w-xxl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Generative AI Response:
          </h5>
          {messages.map((m) => (
            <p
              key={m.id}
              className="font-normal text-gray-700 dark:text-gray-400"
            >
              <b>{m.role === "user" ? "User: " : "AI: "}</b>
              {m.content}
            </p>
          ))}
        </a>
      </div>
    </div>
  );
}
