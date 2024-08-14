import { Fragment } from "react";
import Nav from "../Elements/Nav/Nav";

const NameCountry = [
  {
    id: 1,
    link: "europe",
    links: "/europe",
  },
  {
    id: 2,
    link: "Asia",
    links: "/Asia",
  },
  {
    id: 3,
    link: "Africa",
    links: "/africa",
  },
  {
    id: 4,
    link: "australia",
    links: "/australia",
  },
];

const LinkCountry = () => {
  return (
    <Fragment>
      <div className="mt-5 flex gap-5 lg:gap-10">
        {NameCountry.map((data) => (
          <Nav
            key={data.id}
            link={data.link}
            links={data.links}
            classname="poppins-semibold"
          />
        ))}
      </div>
    </Fragment>
  );
};

export default LinkCountry;
