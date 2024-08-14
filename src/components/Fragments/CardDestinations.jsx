import { Fragment } from "react";
import { FaStar } from "react-icons/fa6";

const CardDestinations = ({ children }) => {
  return (
    <Fragment>
      <div className="mt-5 bg-slate-100 rounded-lg p-2 shadow-md hover:scale-105 hover:transition-all duration-300 hover:shadow-xl">
        {children}
      </div>
    </Fragment>
  );
};

export const CardImage = (props) => {
  const { image, name } = props;
  return (
    <div>
      <img src={image} alt={name} />
    </div>
  );
};

export const CardTitle = (props) => {
  const { name, population } = props;
  return (
    <div className="flex justify-between mt-2">
      <h1 className="poppins-bold tracking-wide">{name}</h1>
      <span className="flex items-center gap-2 text-secondary">
        <FaStar className="text-secondary" />
        {population}
      </span>
    </div>
  );
};

export const CardDescription = (props) => {
  const { description } = props;
  return <p className="poppins-light">{description.substring(0, 100)}...</p>;
};

CardDestinations.CardImage = CardImage;
CardDestinations.CardTitle = CardTitle;
CardDestinations.CardDescription = CardDescription;
export default CardDestinations;
