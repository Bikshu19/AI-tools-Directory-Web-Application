import { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setLoading(true);
    // Show "Thinking..." message
    const thinkingMessage = { sender: 'bot', text: 'Thinking...' };
    setMessages((prev) => [...prev, userMessage, thinkingMessage]);

    try {
      const response = await axios.post('http://localhost:5000/chatbot', {
        message: input,
      });
      const botMessage = { sender: 'bot', text: response.data.reply };

      // Replace "Thinking..." with actual reply
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = botMessage;
        return updated;
      });
    } catch (error) {
      console.error('Error:', error);
      // Remove "Thinking..." if failed
      setMessages((prev) => prev.slice(0, -1));
    }

    setLoading(false);
    setInput('');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative border-2 border-dotted border-sky-400 rounded-md p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto">
        {/* Corner Dots */}
        <div className="absolute top-0 left-0 w-1 h-1 bg-sky-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-1 h-1 bg-sky-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-sky-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-sky-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>

        <div className="rounded-lg shadow-md p-4 w-full">
          <div className="flex flex-col items-center justify-center mb-4 space-y-2">
            <img
              src="/michelle_full-removebg-preview.png"
              alt="bot"
              className="w-20 h-20"
            />
            <h2 className="text-xl font-bold text-center">AI KITT Bot</h2>
          </div>

          <div className="h-80 rounded-md p-2 mb-2 overflow-y-auto flex flex-col space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-md px-3 py-2"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
