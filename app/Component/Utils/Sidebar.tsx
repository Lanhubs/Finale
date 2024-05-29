import React from "react";
import { PiUsersThreeThin } from "react-icons/pi";
import SidebarButton from "./SidebarButton";
import { LuMessageSquare } from "react-icons/lu";
import { TfiVideoCamera } from "react-icons/tfi";
const Sidebar: React.FC = () => {
  return (
    <div className="w-20 bg-gray-700 flex flex-col items-center px-4 py-6 space-y-6">
      <SidebarButton onClick={() => {}}>
        <PiUsersThreeThin />
      </SidebarButton>

      <SidebarButton onClick={() => {}}>
        <LuMessageSquare />
      </SidebarButton>
      <SidebarButton
        className="shaodw-md shadow-green-400 border-green-500 border-2"
        onClick={() => {}}
      >
        <TfiVideoCamera />
      </SidebarButton>
    </div>
  );
};

export default Sidebar;
