import React from "react";
const QuestioningCard = ({ iconName, text }) => {
  return (
    <div className="flex rounded-xl border-[1px] border-gray-100 shadow-sm p-10 flex-col transition-transform transform hover:scale-105 duration-500  justify-center items-center gap-10">
      {iconName}
      <p className="text-[18px] font-medium">{text}</p>
    </div>
  );
};

export default QuestioningCard;
