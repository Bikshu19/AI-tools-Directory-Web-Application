import { useState } from 'react';
import Chatbot from './chatbot';

export default function Chat() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{position:'relative',top:'-100px',backgroundColor:'none'}}>
      <button
        onClick={() => setShowChat(!showChat)}
        className="mb-4 px-4 py-2 font-semibold text-white hover:bg-gray-800 bg-indigo-600 text-lg mx-auto rounded-full w-64"
      >
        {showChat ? 'Close Chatbot' : 'Chat With Me!'}
      </button>

      {showChat && <Chatbot />}
    </div>
  );
}
