import React from "react";

const FooterLinks = ({ title, link }) => {
  return (
    <li className="mt-2 hover:text-primary">
      <a href={link}>{title}</a>
    </li>
  );
};

export default FooterLinks;
