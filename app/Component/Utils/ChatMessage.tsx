import React from 'react';

interface ChatMessageProps {
  name: string;
  message: string;
  isOwn?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ name, message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} space-x-2`}>
      {!isOwn && <div className="w-8 h-8 bg-gray-700 rounded-full"></div>}
      <div className={`bg-gray-700 p-2 rounded-md ${isOwn ? 'bg-green-500' : 'bg-gray-700'}`}>
        <span>{message}</span>
        <span className="block text-sm text-gray-400">{name}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
