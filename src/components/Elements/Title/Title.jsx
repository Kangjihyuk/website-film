import React from "react";

const Title = (props) => {
  const { title, classname } = props;
  return (
    <div className="text-center">
      <h1 className={`poppins-bold text-2xl ${classname}`}>{title}</h1>
    </div>
  );
};

export default Title;
