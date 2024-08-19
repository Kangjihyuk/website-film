import { Fragment } from "react";
import Rate from "../Elements/Rate/Rate";

const cartRating = [
  {
    id: 1,
    rate: "24+",
    title: "Cities",
  },
  {
    id: 2,
    rate: "700+",
    title: "Place",
  },
  {
    id: 3,
    rate: "200+",
    title: "Hotel",
  },
  {
    id: 4,
    rate: "2k+",
    title: "Review",
  },
];

const CardRate = () => {
  return (
    <Fragment>
      <div className="container mt-20 md:mt-36 mb-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {cartRating.map((item) => (
          <Rate key={item.id} rate={item.rate} title={item.title} />
        ))}
      </div>
    </Fragment>
  );
};

export default CardRate;
