import { Fragment } from "react";
import ImagesPerson from "../Elements/ImagesPerson/ImagesPerson";
import UserOne from "../../images/person1.jpg";
import UserTwo from "../../images/person2.jpg";
import UserThree from "../../images/person3.jpg";
import UserFour from "../../images/person4.jpg";
import UserFive from "../../images/person5.jpg";

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
      <div className="flex items-center justify-center -translate-y-[25rem] -translate-x-[35%]">
        {ImagePersonData.map((data) => (
          <ImagesPerson key={data.id} image={data.image} alt={data.alt} />
        ))}
      </div>
    </Fragment>
  );
};

export default ImagePerson;
