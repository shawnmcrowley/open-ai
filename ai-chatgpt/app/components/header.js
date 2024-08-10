// components/Header.js

import { useState } from 'react'
import Chat from './chat'

export default function Header (){
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
   // e.preventDefault();
    // Call the secondary component with the search term as props
    // This can be replaced with your desired functionality
  };

  return (
    <header className="w-full fixed p-4 z-20 top-0 start-0 bg-gray-800 text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-8" />
        <h1 className="text-xl font-bold">AI Assistant</h1>
      </div>
      <form onSubmit={handleSearchSubmit} className="flex-grow max-w-md mx-auto text-blue-800">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What Information Can I Help You Find?"
          className="w-full p-2 rounded border-2 border-gray-300"
        />
      </form>
    </header>
  )
}

