import React from "react";
import Nav from "../Elements/Nav/Nav";

const NavLinks = (props) => {
  const { show } = props;
  return (
    <div
      className={`${show} absolute top-[9.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500 px-10 py-5 gap-3 flex flex-col md:static md:translate-x-0 md:translate-y-0 md:bg-transparent md:grid md:grid-cols-4 md:px-0 md:py-0 md:top-0 z-10`}
    >
      <Nav link="Home" links="/home" classname="poppins-bold" />
      <Nav link="Category" links="/category" classname="poppins-bold" />
      <Nav link="Blog" links="/blog" classname="poppins-bold" />
      <Nav link="About Us" links="/about" classname="poppins-bold" />
    </div>
  );
};

export default NavLinks;
