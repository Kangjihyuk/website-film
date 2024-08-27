import React from "react";
import FooterLinks from "../Elements/FooterLink/FooterLinks";

const MenuFooterOne = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Category",
    link: "/",
  },
  {
    id: 3,
    title: "Blog",
    link: "/",
  },
  {
    id: 4,
    title: "About Us",
    link: "/",
  },
];

const MenuFooterTwo = [
  {
    id: 1,
    title: "Privacy Policy",
    link: "/",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    link: "/",
  },
  {
    id: 3,
    title: "FAQ's",
    link: "/",
  },
  {
    id: 4,
    title: "Support",
    link: "/",
  },
];
const FooterLink = () => {
  return (
    <div className="mt-10 poppins-medium flex gap-20 md:mt-0">
      <div>
        <h1 className="poppins-bold">Quick Links</h1>
        <ul className="mt-3">
          {MenuFooterOne.map((item) => (
            <FooterLinks key={item.id} title={item.title} link={item.link} />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="poppins-bold">Quick Links</h1>
        <ul className="mt-3">
          {MenuFooterTwo.map((item) => (
            <FooterLinks key={item.id} title={item.title} link={item.link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLink;
