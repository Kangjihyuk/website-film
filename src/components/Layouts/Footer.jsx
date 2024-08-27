import { Fragment } from "react";
import Logo from "../Elements/Logo/Logo";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterLink from "../Fragments/FooterLink";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import ContactUs from "../Elements/ContactUs/ContactUs";

const ContactUsLinks = [
  {
    id: 1,
    icon: <CiLocationOn />,
    descriptions: "Surabaya, Indonesia",
  },
  {
    id: 2,
    icon: <BsTelephone />,
    descriptions: "+62 812 3456 7890",
  },
  {
    id: 3,
    icon: <CgMail />,
    descriptions: "pelodexter3@gmail.com",
  },
];
const Footer = () => {
  return (
    <Fragment>
      <div className="mt-10 md:mt-16 lg:mt-24 bg-slate-300/20 p-4 grid md:grid-cols-2 lg:grid-cols-3 place-content-center md:py-10 md:pl-10 lg:pl-24">
        <div>
          <Logo />
          <p className="mt-4 w-1/2 tracking-wide">
            Travel is fatal to prejudice. and narrow mindedness. And many of our
            people.
          </p>
          <div className="flex gap-3 mt-4 lg:gap-5">
            <FaFacebook className="text" />
            <FaTwitter className="text" />
            <FaInstagram className="text" />
            <FaLinkedin className="text" />
          </div>
        </div>
        <FooterLink />
        <div className="mt-10 md:mt-14 lg:mt-0">
          <h1 className="poppins-bold">Contact Us</h1>
          {ContactUsLinks.map((item) => (
            <ContactUs
              key={item.id}
              icon={item.icon}
              descriptions={item.descriptions}
            />
          ))}
        </div>
      </div>
      <div className="bg-slate-300/20 py-2.5 border-t-2">
        <h3 className="flex justify-center poppins-regular items-center">
          Copyright 2024
          <a href="#" className="px-2 text-secondary text-lg">
            @pelodexter3{" "}
          </a>{" "}
          by Khusni Mubarok
        </h3>
      </div>
    </Fragment>
  );
};

export default Footer;
