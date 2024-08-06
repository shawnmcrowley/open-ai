"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <form onSubmit={handleSubmit}>
        <input
          className="fixed top-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="What Information Are You Looking For?"
          onChange={handleInputChange}
        />
      </form>
      
      <div>
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </div>
  </div>
  )
}
