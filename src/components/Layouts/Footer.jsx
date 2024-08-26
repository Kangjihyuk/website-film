import { Fragment } from "react";
import Logo from "../Elements/Logo/Logo";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <Fragment>
      <div className="mt-10 bg-secondary/20 p-4">
        <div>
          <Logo />
          <p className="mt-4 w-1/2 tracking-wide">
            Travel is fatal to prejudice. and narrow mindedness. And many of our
            people.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebook className="text" />
            <FaTwitter className="text" />
            <FaInstagram className="text" />
            <FaLinkedin className="text" />
          </div>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default Footer;
