import React from "react";

const Rate = (props) => {
  const { rate, title } = props;
  return (
    <div className="border-2 p-10 text-center rounded-lg shadow-[0_0_3px_1px_rgba(0,0,0,0.3)]">
      <h1 className="text-secondary poppins-bold text-2xl">{rate}</h1>
      <h4 className="mt-7 text-xl poppins-medium ">{title}</h4>
    </div>
  );
};

export default Rate;
