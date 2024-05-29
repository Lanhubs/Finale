import React from 'react';

const ChatInput: React.FC = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        className="w-full p-2 bg-gray-700 rounded-md"
        placeholder="Drop your question..."
      />
    </div>
  );
}

export default ChatInput;
