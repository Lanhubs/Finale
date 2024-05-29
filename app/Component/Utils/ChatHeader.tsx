import React from 'react';

const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <span className="font-bold">Questions</span>
      </div>
      <button className="w-8 h-8 bg-gray-700 rounded-md"></button>
    </div>
  );
}

export default ChatHeader;
