import React from 'react';

interface VideoCardProps {
  name: string;
  large?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, large }) => {
  return (
    <div className={`relative bg-gray-800 ${large ? 'w-full' : 'w-1/3'}  rounded-lg overflow-hidden`}>
      <div className="p-4 flex items-center justify-center ">
        {/* Placeholder for video/image */}
        <div className="w-full h-full bg-purple-600 rounded-lg"></div>
      </div>
      <div className={`absolute bottom-2 ${large? "right-2":"left-2"} bg-black bg-opacity-50 px-2 py-1 rounded-md`}>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default VideoCard;
