import React from "react";

const Input = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="py-3 pr-20 pl-3 w-full rounded-lg outline-none  placeholder:tracking-wide placeholder:text-gray-500 focus:ring-2 focus:ring-sky-500"
    />
  );
};

export default Input;
