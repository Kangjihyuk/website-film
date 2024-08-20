import { Fragment, useEffect, useState } from "react";
import Title from "../Elements/Title/Title";
import CardDestinations from "../Fragments/CardDestinations";
import LinkCountry from "../Fragments/LinkCountry";
import { getSingleDestination } from "../../api/api.js";
const Place = ({ id, classname, title }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getSingleDestination(id, (data) => {
      setDestinations(data);
    });
  }, [id]);

  return (
    <Fragment>
      <div className={`container ${classname}`}>
        <div className="md:flex md:justify-between">
          <Title title={title} />
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

export default Place;
