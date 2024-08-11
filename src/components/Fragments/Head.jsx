import { Fragment } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

const Head = ({ title, children }) => {
  return (
    <div className="md:w-1/2">
      {" "}
      <div>
        <h1 className="poppins-bold  text-5xl sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <div className="mt-7 flex">{children}</div>
      </div>
    </div>
  );
};

export const HeadText = (props) => {
  const { titleSearch, children, classname } = props;
  return (
    <Fragment>
      <div
        className={`${classname} border-r-2 border-r-slate-300 p-2 bg-white shadow-md w-[90%]`}
      >
        <h2 className="text-primary poppins-semibold md:text-nowrap">
          {titleSearch}
        </h2>
        <p className="flex items-center poppins-bold md:text-nowrap">
          {children}
          <span className="translate-y-0.5">
            <RiArrowDropDownLine className="text-primary" />
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export const Search = () => {
  return (
    <Fragment>
      <span className="flex items-center p-4 text-white bg-primary rounded-e-lg hover:bg-secondary transition-all duration-300 cursor-pointer">
        <IoMdSearch className="sm:hidden animate-pulse" />
        <p className="hidden sm:block animate-pulse">Search</p>
      </span>
    </Fragment>
  );
};

Head.HeadText = HeadText;
Head.Search = Search;
export default Head;
