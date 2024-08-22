import { Fragment, useEffect, useState } from "react";
import Searching from "../components/Elements/Searching/Searching";
import { getAllDestinations } from "../api/api";
import CardDestinations from "../components/Fragments/CardDestinations";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    getAllDestinations((item) => {
      console.log(item);
      setSearch(item);
      setFilterSearch(item);
    });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    let filter = search.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilterSearch(filter);
  };

  return (
    <Fragment>
      <div className="container">
        <Searching handleSearch={handleSearch} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterSearch.length > 0 ? (
            filterSearch.map((data) => (
              <CardDestinations key={data.id}>
                <CardDestinations.CardImage
                  image={data.image}
                  name={data.name}
                />
                <CardDestinations.CardTitle
                  name={data.name}
                  population={data.population}
                />
                <CardDestinations.CardDescription
                  description={data.description}
                />
              </CardDestinations>
            ))
          ) : (
            <div>data not found</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
