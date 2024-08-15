import { Fragment } from "react";
import ImagesPerson from "../Elements/ImagesPerson/ImagesPerson";
import UserOne from "../../images/person1.jpg";
import UserTwo from "../../images/person2.jpg";
import UserThree from "../../images/person3.jpg";
import UserFour from "../../images/person4.jpg";
import UserFive from "../../images/person5.jpg";
import { FaStar } from "react-icons/fa6";

const ImagePersonData = [
  {
    id: 1,
    image: UserOne,
    alt: "khusni",
  },
  {
    id: 2,
    image: UserTwo,
    alt: "osama",
  },
  {
    id: 3,
    image: UserThree,
    alt: "noval",
  },
  {
    id: 4,
    image: UserFour,
    alt: "raju",
  },
  {
    id: 5,
    image: UserFive,
    alt: "dika",
  },
];

const ImagePerson = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center -translate-y-[27rem] -translate-x-[40%] md:-translate-y-[24rem] lg:-translate-x-[45%] lg:-translate-y-[24rem]">
        {ImagePersonData.map((data) => (
          <ImagesPerson key={data.id} image={data.image} alt={data.alt} />
        ))}
      </div>
      <div className="rounded-lg -translate-y-[11rem] md:-translate-y-[9rem] block">
        <ImagesPerson image={UserOne} alt="khusni">
          <p className="poppins-light ml-2">
            World of The best agency
            <span className="flex text-secondary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </p>
        </ImagesPerson>
      </div>
    </Fragment>
  );
};

export default ImagePerson;
