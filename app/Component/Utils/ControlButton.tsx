import React from "react";
interface BtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // Optional prop to allow custom styling
  icon?: React.ReactNode | React.ReactElement;
  callBtn?: boolean;
  
}
export default ({
  icon,
  onClick,
  className,
  callBtn,
}: BtnProps): React.ReactNode => {
  return (
    <button
      className={`${callBtn?"w-16 h-16": "w-12 h-12"} rounded-full flex items-center justify-center text-[18px] p-4 text-white ${
        callBtn ? "bg-red-500" : "bg-gray-800"
      }`}
    >
      {icon}
    </button>
  );
};
