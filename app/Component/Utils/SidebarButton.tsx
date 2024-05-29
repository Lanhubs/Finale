import React from "react";
interface CustomButtonProps {
  label?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // Optional prop to allow custom styling
  children?: React.ReactNode |React.ReactElement;
}
export default ({ label, onClick, className, children }: CustomButtonProps) => {
  return (
    <button
      className={`w-10 h-10 bg-gray-800 rounded-md text-white flex items-center justify-center text-[18px] ${className}`}
      onClick={onClick}

    >
      {children}
    </button>
  );
};
