import React from "react";
import { Fragment } from "react";
import Hamburger from "../Elements/Hamburger/Hamburger";
import Logo from "../Elements/Logo/Logo";
import NavLinks from "../Fragments/NavLinks";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { handleShow, show } = props;
  return (
    <Fragment>
      <div className="p-[0.500rem]  flex items-center justify-between fixed w-full z-50 bg-slate-50">
        <Logo />
        <div className="flex gap-2 md:flex-row-reverse items-center">
          <Link to={"/login"}>
            <Button btn="login" classname="p-1 poppins-bold bg-secondary" />
          </Link>
          <Hamburger handleShow={handleShow} classname="md:hidden" />
          <NavLinks show={show ? "block" : "hidden"} />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
