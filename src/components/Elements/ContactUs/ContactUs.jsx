import React from "react";

const ContactUs = ({ icon, descriptions }) => {
  return (
    <p className="flex items-center gap-2 mt-3 poppins-medium text-secondary text-xl md:text-2xl">
      {icon}
      <span className="text-black text-sm md:text-lg">{descriptions}</span>
    </p>
  );
};

export default ContactUs;
