import { Fragment } from "react";
import Explore from "../../../image/explore.png";
import ImagePerson from "../Fragments/ImagePerson";

const ExploreAll = () => {
  return (
    <Fragment>
      <div className="container flex justify-end mt-32">
        <div className="bg-secondary rounded-full h-[17rem] w-[17rem] lg:w-[25rem] lg:h-[25rem]">
          <img
            src={Explore}
            alt="Explore"
            loading="lazy"
            className="h-[25rem] w-[25rem] md:w-[20rem] md:h-[20rem] object-cover lg:w-[25rem] lg:h-[25rem] -translate-x-10 -translate-y-[30%]"
          />
          <ImagePerson />
        </div>
      </div>
    </Fragment>
  );
};

export default ExploreAll;
