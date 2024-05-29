import React from "react";

export const Spinner = (): React.ReactNode => {
  return (
    <div className="w-[20px] h-[20px] border-4 border-dashed rounded-full border-2 animate-spin border-[#f3f3f3]" />
  );
};
