import React from 'react';
import Sidebar from '../Utils/Sidebar';
import VideoSection from '../Utils/VideoSection';
import ChatSection from '../Utils/ChatSection';
import Drawer from '../Utils/Drawer';

const Meet: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className=" flex-grow flex flex-row flex-1  w-full">
        <VideoSection />
        {/* <ChatSection /> */}
        <Drawer/>
      </div>
    </div>
  );
}

export default Meet;
