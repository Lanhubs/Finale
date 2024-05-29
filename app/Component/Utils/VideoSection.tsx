import React from 'react';
import VideoCard from './VideoCard';
import ControlButtons from './ControlButtons';

const VideoSection: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col p-4 space-y-4 px-4 w-[70%] h-screen">
      <h1 className="text-xl my-4">Math1203</h1>
      
      <div className="flex space-x-4  h-[25%]">
        <VideoCard name="Reeleysia" />
        <VideoCard name="Diya ray" />
      </div>
      <div className="flex justify-center mt-4 flex-1">
        <VideoCard name="Dr. Ajangbe" large />
      </div>
      <ControlButtons />
    </div>
  );
}

export default VideoSection;
