import { Fragment, useEffect, useState } from "react";
import Title from "../Elements/Title/Title";
import { getSingleDestination } from "../../api/api";
import CardDestinations from "../Fragments/CardDestinations";
import LinkCountry from "../Fragments/LinkCountry";

const PopularPlace = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getSingleDestination((data) => {
      setDestinations(data);
    });
  }, []);

  console.log(destinations);
  return (
    <Fragment>
      <div className="mt-28 container sm:mt-56 md:mt-0 ">
        <div className="md:flex md:justify-between">
          <Title title="Popular Place" />
          <LinkCountry />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 cursor-pointer">
          {destinations.map((data) => (
            <CardDestinations key={data.id}>
              <CardDestinations.CardImage image={data.image} name={data.name} />
              <CardDestinations.CardTitle
                name={data.name}
                population={data.population}
              />
              <CardDestinations.CardDescription
                description={data.description}
              />
            </CardDestinations>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PopularPlace;
