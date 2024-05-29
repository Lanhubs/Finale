
import React from "react";
import Tab from "./Tab";
export default () => {
  const [activeTab, setActiveTab] = React.useState<String>("Students");

  return (
    <>
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
    </>
  );
};
