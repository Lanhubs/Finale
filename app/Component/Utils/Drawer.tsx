import React from "react";
import Tab from "./Tab";
import ChatSection from "./ChatSection";
import StudentsList from "./StudentsList";

export default () => {
  const [activeTab, setActiveTab] = React.useState<String>("Students");

  return (
    <>
      <div className="w-1/3 bg-gray-800 p-4 flex flex-col">
        <div className="flex w-full mb-4">
          <Tab
            label="Chats"
            active={activeTab == "Chats"}
            onClick={() => setActiveTab("Chats")}
          />
          <Tab
            label="Students"
            active={activeTab == "Students"}
            onClick={() => setActiveTab("Students")}
            count={9}
          />
        </div>
        {activeTab === "Chats" && <ChatSection />}
        {activeTab === "Students" && <StudentsList />}
      </div>
    </>
  );
};
