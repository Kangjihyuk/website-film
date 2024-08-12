import { Fragment, useEffect, useState } from "react";
import Nav from "../Elements/Nav/Nav";
import Title from "../Elements/Title/Title";
import { getAllDestinations } from "../../api/api";
import CardDestinations from "../Fragments/CardDestinations";
const PopularPlace = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getAllDestinations((data) => {
      setDestinations(data);
    });
  }, []);
  console.log(destinations);
  return (
    <Fragment>
      <div className="mt-28 container sm:mt-56 md:mt-0 ">
        <div className="md:flex md:justify-between">
          <Title title="Popular Place" />
          <div className="mt-5 flex gap-5 lg:gap-10">
            <Nav link="Beach" links="beach" classname="poppins-medium" />
            <Nav link="Mountain" links="mountain" classname="poppins-medium" />
            <Nav
              link="Waterfall"
              links="waterfall"
              classname="poppins-medium"
            />
            <Nav link="Icebergs" links="icebergs" classname="poppins-medium" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
