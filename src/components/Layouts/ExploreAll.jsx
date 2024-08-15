import { Fragment } from "react";
import Explore from "../../../image/explore.png";
import ImagePerson from "../Fragments/ImagePerson";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import Icon from "../Elements/Icon/Icon";

const MenuIcon = [
  {
    id: 1,
    icon: <PiAirplaneInFlightLight />,
    title: "Flight",
  },
  {
    id: 2,
    icon: <FaWifi />,
    title: "Wifi",
  },
  {
    id: 3,
    icon: <LiaHotelSolid />,
    title: "Hotel",
  },
  {
    id: 4,
    icon: <IoFastFoodOutline />,
    title: "Food",
  },
];

const ExploreAll = () => {
  return (
    <Fragment>
      <div className="container mt-32 md:flex md:justify-center md:items-center md:gap-5 md:mt-0 lg:mt-10 lg:gap-10">
        <div className="bg-secondary rounded-full h-[17rem] w-[17rem] translate-x-1/2 md:translate-x-0 md:translate-y-1/4">
          <img
            src={Explore}
            alt="Explore"
            loading="lazy"
            className="h-[25rem] w-[25rem] md:w-[20rem] md:h-[20rem] object-cover  -translate-x-10 -translate-y-[30%]"
          />
          <ImagePerson />
        </div>
        <div className="mt-28 md:w-1/2">
          <h1 className="poppins-bold text-5xl sm:text-6xl md:text-4xl md:text-justify lg:text-5xl xl:text-6xl">
            Explore all corners of the world with us
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-base text-justify xl:text-xl text-slate-600">
            Travel is total to prejudice. and narrow mindedness.And many our
            people need it sorely on these accounts. And many of our people need
            it sorely.
          </p>
          <div className="grid grid-cols-4 gap-7 sm:grid-cols-2 sm:gap-4">
            {MenuIcon.map((item) => (
              <Icon
                key={item.id}
                icon={item.icon}
                title={item.title}
                className="mt-8"
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExploreAll;
