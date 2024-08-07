import React from "react";

const Hamburger = (props) => {
  const { handleShow, classname } = props;
  return (
    <div className={classname}>
      <label
        htmlFor="check"
        className="menuButton flex justify-center items-center flex-col gap-[13%] text-[#090909] w-[2.5em] h-[2.5em] rounded-[0.5em] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5, -6px_-6px_12px_#ffffff] hover:border-white active:text-[#666] active:shadow-inset-[4px_4px_12px_#c5c5c5, inset_-4px_-4px_12px_#ffffff]"
      >
        <input
          id="check"
          type="checkbox"
          className="hidden"
          onClick={handleShow}
        />
        <span className="top block w-[30px] h-[4px] bg-[#131313] rounded-full transition-transform duration-300 ease"></span>
        <span className="mid block w-[30px] h-[4px] bg-[#131313] rounded-full transition-transform duration-300 ease"></span>
        <span className="bot block w-[30px] h-[4px] bg-[#131313] rounded-full transition-transform duration-300 ease"></span>
      </label>
    </div>
  );
};

export default Hamburger;
