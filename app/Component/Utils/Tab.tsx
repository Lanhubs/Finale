import React from "react";

interface TabProps {
    label: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    
    active: Boolean;
    count?: number;
  }
  
  const Tab: React.FC<TabProps> = ({ label, onClick, count, active }) => {
    return (
      <div onClick={onClick} className={`py-2 flex items-center justify-center flex-1 cursor-pointer ${active ? 'rounded-md bg-green-500 text-white' : ''}`}>
        {label} {count && <span className="ml-2 text-gray-500">{count}</span>}
      </div>
    );
  };

  export default Tab