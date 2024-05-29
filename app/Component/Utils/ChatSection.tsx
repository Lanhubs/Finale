import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import Tabs from "./Tabs";

const ChatSection: React.FC = () => {
  return (
    <>
      <ChatHeader />
      <div className="flex-grow space-y-4 overflow-y-auto">
        <ChatMessage
          name="Reeleysia"
          message="This one dealing with user behavior and feeling"
        />
        <ChatMessage
          name="Diya ray"
          message="This one dealing with user behavior and feeling"
        />
        <ChatMessage
          name="Hussain"
          message="This one dealing with user behavior and feeling"
        />
      </div>
      <ChatInput />
    </>
  );
};

export default ChatSection;
